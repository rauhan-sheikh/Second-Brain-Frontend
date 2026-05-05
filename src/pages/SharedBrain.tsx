import { Card } from "../components/Card";
import { SideBar } from "../components/SideBar";
import { useSharedBrainContent } from "../hooks/useSharedBrainContent";
import { useParams } from "react-router-dom";
import Masonry from "react-masonry-css";

function ShareBrain() {
  const { shareLink } = useParams();
  if (!shareLink) {
    return (
      <div className="min-h-screen ml-64 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold">Invalid share link</h1>
      </div>
    );
  }
  const { contents, user, status } = useSharedBrainContent(shareLink);

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

  // console.log("User info from useContent hook:", user);
  const pageTitle = `${user}'s Second Brain`;

  return (
    <div>
      <div>
        <SideBar signoutEnabled={false} />
      </div>
      <div className="min-h-screen ml-64 p-8 bg-gray-100">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold">{pageTitle}</h1>
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
                isDeletable={false} // Disable delete button for shared brains
              />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default ShareBrain;
