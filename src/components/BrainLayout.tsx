import { type ReactNode, useState } from "react";
import { SideBar } from "./SideBar";
import Masonry from "react-masonry-css";
import { Card } from "./Card";

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

  const filteredContents =
    filter === "all"
      ? contents
      : contents.filter((content) => content.type === filter);

  return (
    <div>
      <SideBar
        signoutEnabled={!isSharedView}
        onSelectFilter={setFilter}
        activeFilter={filter}
      />
      <div className="min-h-screen ml-64 p-8 bg-gray-100">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">{userTitle}</h1>
          <div className="flex gap-4">{actions}</div>
        </div>

        <Masonry
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          breakpointCols={{ default: 3, 1100: 3, 700: 2, 500: 1 }}
        >
          {filteredContents.map(({ _id, type, title, description, link }) => (
            <div key={_id} className="mb-6">
              <Card
                id={_id}
                type={type}
                title={title}
                description={description}
                link={link}
                onDelete={refresh}
                isDeletable={!isSharedView}
              />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}
