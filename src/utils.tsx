export function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const videoIdMatch =
      url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/) ||
      url.match(/youtu\.be\/([0-9A-Za-z_-]{11})/);
    if (videoIdMatch && videoIdMatch[1]) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    return null;
  } catch {
    return null;
  }
}
export type ContentType = "article" | "tweet" | "video" | "book" | "other";
