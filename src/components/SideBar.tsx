import { ArticleIcon } from "../icons/ArticleIcon";
import { BookIcon } from "../icons/BookIcon";
import { Logo } from "../icons/Logo";
import { OtherIcon } from "../icons/OtherIcon";
import { TweetIcon } from "../icons/TweetIcon";
import { VideoIcon } from "../icons/VideoIcon";
import { SideBarItem } from "./SideBarItem";

export function SideBar() {
  return (
    <div className="h-screen w-64 border-r p-4 fixed bg-white left-0 top-0 pl-6">
      <div className="flex items-center pt-4 text-2xl">
        <div className="w-12 pr-2">
          <Logo />
        </div>
        Second Brain
      </div>
      <div className="pt-8 pl-4">
        <SideBarItem text="Article" icon={<ArticleIcon />} />
        <SideBarItem text="Twitter" icon={<TweetIcon />} />
        <SideBarItem text="Youtube" icon={<VideoIcon />} />
        <SideBarItem text="Book" icon={<BookIcon />} />
        <SideBarItem text="Other" icon={<OtherIcon />} />
      </div>
    </div>
  );
}
