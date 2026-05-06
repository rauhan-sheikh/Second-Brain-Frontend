import { useState, useEffect } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import api from "../config";
import toast from "react-hot-toast";

const FRONTEND_URL =
  import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173";

export function ShareBrainModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [isShared, setIsShared] = useState(false);
  const [shareLink, setShareLink] = useState("");

  useEffect(() => {
    api
      .get("/api/v1/brain")
      .then((response) => {
        setIsShared(response.data.share);
        if (response.data.share) {
          setShareLink(`${FRONTEND_URL}/brain/${response.data.shareLink}`);
        }
      })
      .catch((error) => {
        console.error("Error fetching share status:", error);
      });
  }, [open]);

  // Logic to toggle sharing
  async function handleToggle() {
    const nextState = !isShared;
    try {
      const response = await api.post("/api/v1/brain/share", {
        share: nextState,
      });
      setIsShared(nextState);

      // If shared, set the link. Adjust response.data.hash based on your backend
      if (nextState) {
        setShareLink(`${FRONTEND_URL}/brain/${response.data.shareLink}`);
      }
    } catch (error) {
      console.error("Error updating share status:", error);
    }
  }

  return (
    <div>
      {open && (
        <div className="fixed inset-0 z-60 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <div
            className="relative bg-white w-full max-w-md p-6 rounded-2xl shadow-2xl border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Share Your Brain
              </h2>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
              >
                <CrossIcon />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {/* The Toggle Section */}
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                <span className="font-medium text-gray-700">Public Access</span>
                <button
                  onClick={handleToggle}
                  className={`${
                    isShared ? "bg-green-500" : "bg-gray-300"
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200`}
                >
                  <span
                    className={`${isShared ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition duration-200`}
                  />
                </button>
              </div>

              {/* Conditional Link Section */}
              {isShared && (
                <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
                  <p className="text-sm text-gray-500">
                    Share this link with anyone to view your brain:
                  </p>
                  <div className="flex gap-2">
                    <input
                      readOnly
                      value={shareLink}
                      className="flex-1 bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 outline-none"
                    />
                    <Button
                      variant="primary"
                      text="Copy"
                      onClick={() =>
                        navigator.clipboard
                          .writeText(shareLink)
                          .then(() =>
                            toast.success("Link copied to clipboard!"),
                          )
                      }
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
