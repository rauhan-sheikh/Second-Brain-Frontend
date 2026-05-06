import { Button } from "../components/Button";
import { ShareIcon } from "../icons/ShareIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { CreateContentModal } from "../components/CreateContentModal";
import { useEffect, useState } from "react";
import { useContent } from "../hooks/useContent";
import { ShareBrainModal } from "../components/ShareBrainModal";
import { BrainLayout } from "../components/BrainLayout";
import { Loader } from "../components/Loader";

function Dashboard() {
  const [addContentModalOpen, setAddContentModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const { contents, refresh, user, loading } = useContent();

  const actions = (
    <>
      <Button
        variant="secondary"
        text="Share Brain"
        startIcon={<ShareIcon />}
        onClick={() => setShareModalOpen(true)}
        className="md:px4 px2"
        isDashboard={true}
      />
      <Button
        variant="primary"
        text="Add Content"
        startIcon={<PlusIcon />}
        onClick={() => setAddContentModalOpen(true)}
        className="md:px4 px2"
        isDashboard={true}
      />
    </>
  );

  useEffect(() => {
    refresh();
  }, [addContentModalOpen]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <CreateContentModal
        open={addContentModalOpen}
        onClose={() => setAddContentModalOpen(false)}
      />
      <ShareBrainModal
        open={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
      />

      <BrainLayout
        contents={contents}
        userTitle={`${user.username}'s Second Brain`}
        actions={actions}
        refresh={refresh}
      />
    </>
  );
}

export default Dashboard;
