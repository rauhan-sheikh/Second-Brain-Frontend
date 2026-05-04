import type { ReactElement } from "react";

export function SideBarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex items-center mb-6 cursor-pointer hover:text-blue-600 hover:bg-gray-100 p-2 rounded-md">
      <div className="mr-4">{icon}</div>
      <div className="text-lg">{text}</div>
    </div>
  );
}
