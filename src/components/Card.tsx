import { ArticleIcon } from "../icons/ArticleIcon";
import { VideoIcon } from "../icons/VideoIcon";
import { TweetIcon } from "../icons/TweetIcon";
import { BookIcon } from "../icons/BookIcon";
import { OtherIcon } from "../icons/OtherIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import {
  getYouTubeEmbedUrl,
  type ContentType,
  getTweetEmbedUrl,
} from "../utils";
import api from "../config";

interface CardProps {
  id: string;
  title: string;
  description: string;
  link: string;
  type: ContentType;
  onDelete?: () => void;
  isDeletable?: boolean; // Optional prop to control delete button visibility
}

export function Card({
  id,
  title,
  description,
  link,
  type,
  onDelete,
  isDeletable = true,
}: CardProps) {
  function handleDelete() {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${title}"?`,
    );

    if (!confirmDelete) {
      return;
    }

    try {
      api.delete(`/api/v1/content/`, { data: { contentId: id } });
      if (onDelete) onDelete();
    } catch (error) {
      console.error("Error deleting content:", error);
      window.alert("Failed to delete content");
      // Optionally, you can add error handling feedback to the user here
    }
  }

  return (
    <div>
      <div className="p-4 border rounded-md shadow-sm border-gray-200 bg-white max-w-72 min-h-48 min-w-72">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="mx-2 text-gray-500">
              {/* You can add an icon based on the type here */}
              {type === "article" && <ArticleIcon />}
              {type === "video" && <VideoIcon />}
              {type === "tweet" && <TweetIcon />}
              {type === "book" && <BookIcon />}
              {type === "other" && <OtherIcon />}
            </div>
            <div className="text-lg font-semibold">{title}</div>
          </div>
          {isDeletable && (
            <div className="cursor-pointer" onClick={handleDelete}>
              <DeleteIcon />
            </div>
          )}
        </div>
        <div className="text-gray-500 mb-4">{description}</div>
        <div className="mt-4 flex justify-center">
          {(type === "article" || type === "other") && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Read more
            </a>
          )}
          {type === "video" && (
            <iframe
              className="w-full"
              src={getYouTubeEmbedUrl(link) || ""}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {type === "tweet" && (
            <blockquote className="twitter-tweet">
              <a href={getTweetEmbedUrl(link) || ""}></a>
            </blockquote>
          )}
          {type === "book" && (
            <iframe
              frameBorder="0"
              width="165"
              height="345"
              src={link + "/widget"}
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}
