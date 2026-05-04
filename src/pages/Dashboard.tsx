import { Button } from "../components/Button";
import { ShareIcon } from "../icons/ShareIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { Card } from "../components/Card";
import { SideBar } from "../components/SideBar";
import { CreateContentModal } from "../components/CreateContentModal";
import { useEffect, useState } from "react";
import { useContent } from "../hooks/useContent";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh, username } = useContent();

  const pageTitle = `${username}'s Second Brain`;

  useEffect(() => {
    refresh();
  }, [modalOpen]);

  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div className="min-h-screen ml-64 p-8 bg-gray-100">
        <CreateContentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
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
            />
            <Button
              variant="primary"
              text="Add Content"
              startIcon={<PlusIcon />}
              onClick={() => setModalOpen(true)}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mt-8">
          {contents.map(({ type, title, description, link }) => (
            <Card
              // key={content.id}
              type={type}
              title={title}
              description={description}
              link={link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
