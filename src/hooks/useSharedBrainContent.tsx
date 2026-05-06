import { useEffect, useState } from "react";
import api from "../config";

export function useSharedBrainContent(hash: string) {
  const [contents, setContents] = useState([]);
  const [user, setUser] = useState("");
  const [status, setStatus] = useState(false); // 'loading', 'success', 'error'
  const [loading, setLoading] = useState(true);

  function refresh() {
    return api
      .get(`/api/v1/brain/${hash}`)
      .then((response) => {
        setContents(response.data.contents);
        setUser(response.data.username);
        setStatus(true);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
        setStatus(false);
      });
  }

  useEffect(() => {
    refresh().finally(() => setLoading(false));
    let interval = setInterval(refresh, 10 * 1000); // Refresh every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return { contents, refresh, user, status, loading };
}
