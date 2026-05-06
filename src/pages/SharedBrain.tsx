import { useSharedBrainContent } from "../hooks/useSharedBrainContent";
import { useParams } from "react-router-dom";
import { BrainLayout } from "../components/BrainLayout";
import { Loader } from "../components/Loader";

function ShareBrain() {
  const { shareLink } = useParams();
  if (!shareLink) {
    return (
      <div className="min-h-screen ml-64 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold">Invalid share link</h1>
      </div>
    );
  }
  const { contents, user, status, loading } = useSharedBrainContent(shareLink);

  if (loading) {
    return <Loader />;
  }

  if (status === false) {
    return (
      <div className="min-h-screen p-8 bg-gray-100">
        <h1 className="text-3xl font-bold">Invalid share link</h1>
        <p>
          The brain you are looking for doesn't exist or has been made private.
        </p>
      </div>
    );
  }

  return (
    <BrainLayout
      contents={contents}
      userTitle={`${user}'s Second Brain`}
      isSharedView={true}
    />
  );
}

export default ShareBrain;
