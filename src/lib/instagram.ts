import type { PortfolioItem } from "@/types";

export async function getInstagramVideos(): Promise<PortfolioItem[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return [];
  }

  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}`;

  try {
    // Revalidate every 1 hour (3600 seconds)
    const response = await fetch(url, { next: { revalidate: 3600 } });
    const data = await response.json();

    if (!data.data) return [];

    interface InstagramPost {
      id: string;
      caption?: string;
      media_type: string;
      media_url: string;
      thumbnail_url?: string;
      permalink?: string;
    }

    // Keep video posts only; map to PortfolioItem
    return data.data
      .filter(
        (post: InstagramPost) =>
          post.media_type === "VIDEO" || post.media_type === "REEL"
      )
      .map((post: InstagramPost) => ({
        id: post.id,
        title: post.caption
          ? post.caption.slice(0, 60) + (post.caption.length > 60 ? "…" : "")
          : "Instagram reel",
        category: "video" as const,
        thumbnail: post.thumbnail_url || post.media_url,
        videoUrl: post.media_url,
        instagramUrl: post.permalink,
      }));
  } catch (error) {
    console.error("Error fetching Instagram feed:", error);
    return [];
  }
}
