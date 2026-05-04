import { useEffect, useState } from "react";
import api from "../config";

export function useContent() {
  const [contents, setContents] = useState([]);
  const [username, setUsername] = useState("");

  api
    .get("/api/v1/auth/me")
    .then((response) => {
      setUsername(response.data.username);
    })
    .catch((error) => {
      console.error("Error fetching user info:", error);
    });

  function refresh() {
    api
      .get("/api/v1/content")
      .then((response) => {
        setContents(response.data.contents);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
      });
  }

  useEffect(() => {
    refresh();
    let interval = setInterval(refresh, 10 * 1000); // Refresh every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return { contents, refresh, username };
}
