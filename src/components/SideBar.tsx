import { useNavigate } from "react-router-dom";
import { ArticleIcon } from "../icons/ArticleIcon";
import { BookIcon } from "../icons/BookIcon";
import { Logo } from "../icons/Logo";
import { OtherIcon } from "../icons/OtherIcon";
import { TweetIcon } from "../icons/TweetIcon";
import { VideoIcon } from "../icons/VideoIcon";
import { Button } from "./Button";
import { SideBarItem } from "./SideBarItem";

export function SideBar({
  signoutEnabled = true,
  onSelectFilter,
  activeFilter,
}: {
  signoutEnabled?: boolean;
  onSelectFilter: (
    filter: "all" | "article" | "tweet" | "video" | "book" | "other",
  ) => void;
  activeFilter: "all" | "article" | "tweet" | "video" | "book" | "other";
}) {
  const navigate = useNavigate();

  function handleSignOut() {
    setTimeout(() => {
      localStorage.removeItem("token");
      navigate("/signin");
    }, 1000);
  }

  return (
    <div className="h-screen w-64 p-4 fixed bg-white left-0 top-0 pl-6">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div
            className="flex items-center pt-4 text-2xl cursor-pointer"
            onClick={() => onSelectFilter("all")}
          >
            <div className="w-12 pr-2">
              <Logo />
            </div>
            Second Brain
          </div>
          <div className="pt-8 pl-4">
            <SideBarItem
              text="Article"
              icon={<ArticleIcon />}
              onClick={() => onSelectFilter("article")}
              isActive={activeFilter === "article"}
            />
            <SideBarItem
              text="Twitter"
              icon={<TweetIcon />}
              onClick={() => onSelectFilter("tweet")}
              isActive={activeFilter === "tweet"}
            />
            <SideBarItem
              text="Youtube"
              icon={<VideoIcon />}
              onClick={() => onSelectFilter("video")}
              isActive={activeFilter === "video"}
            />
            <SideBarItem
              text="Book"
              icon={<BookIcon />}
              onClick={() => onSelectFilter("book")}
              isActive={activeFilter === "book"}
            />
            <SideBarItem
              text="Other"
              icon={<OtherIcon />}
              onClick={() => onSelectFilter("other")}
              isActive={activeFilter === "other"}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5">
          {signoutEnabled && (
            <Button variant="signout" text="Sign Out" onClick={handleSignOut} />
          )}
          <div className="text-sm text-gray-500 mb-4">
            Made with ❤️ by Rauhan Sheikh
          </div>
        </div>
      </div>
    </div>
  );
}
