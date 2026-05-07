import { useRef } from "react";
import { type ContentType } from "../utils";
import { CrossIcon } from "../icons/CrossIcon";
import { Input } from "./Input";
import { Button } from "./Button";
import api from "../config";
import { toast } from "react-hot-toast";

export function CreateContentModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);

  async function addContent() {
    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;
    const link = linkRef.current?.value;
    const contentType = typeRef.current?.value as ContentType;

    try {
      await api.post("/api/v1/content", {
        title,
        description,
        link,
        type: contentType,
      });
      toast.success("Content added successfully!");
      onClose();
    } catch (error: any) {
      const responseData = error.response?.data;

      const errorMessage =
        responseData?.errors?.map((err: any) => err.message).join(", ") ||
        responseData?.message ||
        error.message ||
        "An unexpected error occurred while adding content.";
      toast.error(errorMessage);
    }
  }

  return (
    <div>
      {open && (
        <div className="fixed inset-0 z-60 flex items-center justify-center">
          {/* 1. The Backdrop: Handles closing and provides visual blur */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* 2. The Modal Card: Note stopPropagation so clicks here don't close it */}
          <div
            className="relative bg-white w-full max-w-md p-6 rounded-2xl shadow-2xl border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Add New Content
              </h2>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
              >
                <CrossIcon />
              </button>
            </div>

            {/* Form Body - Using a gap for consistent spacing */}
            <div className="flex flex-col gap-1">
              <Input placeholder="Title" reference={titleRef} type="text" />
              <Input
                placeholder="Description"
                reference={descriptionRef}
                type="textarea"
              />
              <Input placeholder="Link" reference={linkRef} type="text" />
              <Input
                placeholder="Type"
                reference={typeRef}
                type="select"
                options={[
                  { label: "YouTube", value: "video" },
                  { label: "Article", value: "article" },
                  { label: "Tweet", value: "tweet" },
                  { label: "Book", value: "book" },
                  { label: "Other", value: "other" },
                ]}
              />

              <div className="mt-2 flex justify-center gap-3">
                <Button variant="secondary" text="Cancel" onClick={onClose} />
                <Button
                  variant="primary"
                  text="Create Content"
                  onClick={addContent}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
