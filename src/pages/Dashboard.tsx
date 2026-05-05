import { Button } from "../components/Button";
import { ShareIcon } from "../icons/ShareIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { Card } from "../components/Card";
import { SideBar } from "../components/SideBar";
import { CreateContentModal } from "../components/CreateContentModal";
import { useEffect, useState } from "react";
import { useContent } from "../hooks/useContent";
import { ShareBrainModal } from "../components/ShareBrainModal";
import Masonry from "react-masonry-css";

function Dashboard() {
  const [addContentModalOpen, setAddContentModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const { contents, refresh, user } = useContent();

  // console.log("User info from useContent hook:", user);
  const pageTitle = `${user.username}'s Second Brain`;

  useEffect(() => {
    refresh();
  }, [addContentModalOpen]);
  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div className="min-h-screen ml-64 p-8 bg-gray-100">
        <CreateContentModal
          open={addContentModalOpen}
          onClose={() => setAddContentModalOpen(false)}
        />
        <ShareBrainModal
          open={shareModalOpen}
          onClose={() => setShareModalOpen(false)}
        />
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold">{pageTitle}</h1>
          </div>

          <div className="flex gap-4">
            <Button
              variant="secondary"
              text="Share Brain"
              startIcon={<ShareIcon />}
              onClick={() => setShareModalOpen(true)}
            />
            <Button
              variant="primary"
              text="Add Content"
              startIcon={<PlusIcon />}
              onClick={() => setAddContentModalOpen(true)}
            />
          </div>
        </div>
        <Masonry
          className="my-masonry-grid mt-8"
          columnClassName="my-masonry-grid_column"
          breakpointCols={{ default: 3, 1100: 3, 700: 2, 500: 1 }}
        >
          {contents.map(({ _id, type, title, description, link }) => (
            <div key={_id} className="mb-6">
              <Card
                id={_id}
                type={type}
                title={title}
                description={description}
                link={link}
                onDelete={refresh}
              />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default Dashboard;
