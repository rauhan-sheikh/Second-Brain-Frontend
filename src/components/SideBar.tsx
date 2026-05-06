import { useNavigate } from "react-router-dom";
import { ArticleIcon } from "../icons/ArticleIcon";
import { BookIcon } from "../icons/BookIcon";
import { Logo } from "../icons/Logo";
import { OtherIcon } from "../icons/OtherIcon";
import { TweetIcon } from "../icons/TweetIcon";
import { VideoIcon } from "../icons/VideoIcon";
import { Button } from "./Button";
import { SideBarItem } from "./SideBarItem";
import { CrossIcon } from "../icons/CrossIcon";

export function SideBar({
  signoutEnabled = true,
  onSelectFilter,
  activeFilter,
  isOpen,
  onClose,
}: {
  signoutEnabled?: boolean;
  onSelectFilter: (
    filter: "all" | "article" | "tweet" | "video" | "book" | "other",
  ) => void;
  activeFilter: "all" | "article" | "tweet" | "video" | "book" | "other";
  isOpen: boolean;
  onClose: () => void;
}) {
  const navigate = useNavigate();

  function handleSignOut() {
    setTimeout(() => {
      localStorage.removeItem("token");
      navigate("/signin");
    }, 1000);
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`h-screen w-64 p-4 fixed bg-white left-0 top-0 pl-6 z-50 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 /* Force visible on Desktop */
        `}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between pt-4">
              <div
                className="flex items-center text-2xl cursor-pointer"
                onClick={() => {
                  onSelectFilter("all");
                  onClose();
                }}
              >
                <div className="w-12 pr-2">
                  <Logo />
                </div>
                Second Brain
              </div>
              <button
                onClick={onClose}
                className="md:hidden p-1 hover:bg-gray-100 rounded"
              >
                <CrossIcon />
              </button>
            </div>
            <div className="pt-8 pl-4">
              <SideBarItem
                text="Article"
                icon={<ArticleIcon />}
                onClick={() => {
                  onSelectFilter("article");
                  onClose();
                }}
                isActive={activeFilter === "article"}
              />
              <SideBarItem
                text="Twitter"
                icon={<TweetIcon />}
                onClick={() => {
                  onSelectFilter("tweet");
                  onClose();
                }}
                isActive={activeFilter === "tweet"}
              />
              <SideBarItem
                text="Youtube"
                icon={<VideoIcon />}
                onClick={() => {
                  onSelectFilter("video");
                  onClose();
                }}
                isActive={activeFilter === "video"}
              />
              <SideBarItem
                text="Book"
                icon={<BookIcon />}
                onClick={() => {
                  onSelectFilter("book");
                  onClose();
                }}
                isActive={activeFilter === "book"}
              />
              <SideBarItem
                text="Other"
                icon={<OtherIcon />}
                onClick={() => {
                  onSelectFilter("other");
                  onClose();
                }}
                isActive={activeFilter === "other"}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5">
            {signoutEnabled && (
              <Button
                variant="signout"
                text="Sign Out"
                onClick={handleSignOut}
              />
            )}
            <div className="text-sm text-gray-500 mb-4">
              Made with ❤️ by Rauhan Sheikh
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
