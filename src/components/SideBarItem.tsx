import type { ReactElement } from "react";

export function SideBarItem({
  text,
  icon,
  onClick,
  isActive = false,
}: {
  text: string;
  icon: ReactElement;
  onClick: () => void;
  isActive?: boolean;
}) {
  return (
    <div
      className={`flex items-center mb-6 cursor-pointer p-2 rounded-md transition-all
        ${
          isActive
            ? "text-blue-600 bg-gray-200" // Styles when active
            : "hover:text-blue-600 hover:bg-gray-100 text-gray-700" // Styles when idle
        }`}
      onClick={onClick}
    >
      <div className="mr-4">{icon}</div>
      <div className="text-lg">{text}</div>
    </div>
  );
}
