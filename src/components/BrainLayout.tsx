import { type ReactNode, useState, useEffect, useRef } from "react";
import { SideBar } from "./SideBar";
import { Card } from "./Card";
import { HamburgerIcon } from "../icons/HamburgerIcon";
import { Button } from "./Button";
import macy from "macy";

interface BrainLayoutProps {
  contents: any[];
  userTitle: string;
  actions?: ReactNode;
  isSharedView?: boolean;
  refresh?: () => void;
}

export function BrainLayout({
  contents,
  userTitle,
  actions,
  isSharedView = false,
  refresh,
}: BrainLayoutProps) {
  const [filter, setFilter] = useState<
    "all" | "article" | "tweet" | "video" | "book" | "other"
  >("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const macyRef = useRef<any>(null);
  const containterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredContents =
    filter === "all"
      ? contents
      : contents.filter((content) => content.type === filter);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    macyRef.current = macy({
      container: containterRef.current,
      trueOrder: false,
      waitForImages: true,
      margin: 24,
      columns: 3,
      breakAt: {
        1100: 3,
        700: 2,
        500: 1,
      },
    });

    return () => {
      if (macyRef.current) {
        macyRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (macyRef.current) {
      macyRef.current.reInit();

      const timer = setTimeout(() => {
        macyRef.current.reInit();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [filteredContents]);

  return (
    <div>
      <SideBar
        signoutEnabled={!isSharedView}
        onSelectFilter={setFilter}
        activeFilter={filter}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div
        className={`min-h-screen p-4 bg-gray-100 transition-all duration-300 
    ml-0           /* Mobile: No margin */
    md:ml-64       /* Desktop: Always pushed right */
  `}
      >
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Button
                variant="secondary"
                text=""
                onClick={toggleSidebar}
                className="md:hidden"
                startIcon={<HamburgerIcon />}
              />
              <h1 className="text-xl md:text-3xl font-bold truncate">
                {userTitle}
              </h1>
            </div>
            <div className="flex gap-2 md:gap-4">{actions}</div>
          </div>
        </div>

        <div ref={containterRef} className="w-full">
          {filteredContents.map((item) => (
            <div key={item._id} className="mb-6">
              <Card
                {...item}
                id={item._id}
                refresh={refresh}
                isDeletable={!isSharedView}
                onDelete={refresh}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
