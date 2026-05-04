import { useRef, useState } from "react";
import { type ContentType } from "../utils";
import { CrossIcon } from "../icons/CrossIcon";
import { Input } from "./Input";
import { Button } from "./Button";

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

  const [type, setType] = useState<ContentType>("video");

  function addContent() {
    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;
    const link = linkRef.current?.value;
    const contentType = typeRef.current?.value as ContentType;

    console.log({ title, description, link, contentType });

    //     await axios.post(`${BACKEND_URL}/api/v1/content`, {
  }

  return (
    <div>
      {open && (
        <div>
          <div className="w-screen h-screen  bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center"></div>
          <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center">
              <div className="bg-white opacity-100 p-4 rounded fixed flex justify-end flex-col">
                <div className="flex justify-between items-center mb-4">
                  <div className="font-medium">Create Content</div>
                  <div onClick={onClose} className="cursor-pointer">
                    <CrossIcon />
                  </div>
                </div>
                <div>
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
                    value={type}
                  />
                  <div className="flex justify-center">
                    <Button
                      variant="primary"
                      text="Create"
                      onClick={addContent}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
