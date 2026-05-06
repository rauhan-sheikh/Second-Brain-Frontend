import { useEffect, useState } from "react";
import api from "../config";

export function useContent() {
  const [contents, setContents] = useState([]);
  const [user, setUser] = useState({ username: "", _id: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/api/v1/auth/me")
      .then((response) => {
        setUser({
          username: response.data.username,
          _id: response.data._id,
        });
      })
      .catch((error) => {
        console.error("Error fetching user info:", error);
      });
  }, []);

  function refresh() {
    return api
      .get("/api/v1/content")
      .then((response) => {
        setContents(response.data.contents);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
      });
  }

  useEffect(() => {
    refresh().finally(() => setLoading(false));
    let interval = setInterval(refresh, 10 * 1000); // Refresh every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return { contents, refresh, user, loading };
}
