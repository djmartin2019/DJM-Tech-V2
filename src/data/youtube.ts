export const YOUTUBE_CHANNEL_ID = "UC0UfDRsXPQ6A7s98_2fXMOg";
export const YOUTUBE_CHANNEL_URL =
  "https://www.youtube.com/channel/UC0UfDRsXPQ6A7s98_2fXMOg";
export const YOUTUBE_FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;
export const YOUTUBE_CHANNEL_NAME = "DJM Tech";

export interface YouTubeVideo {
  id: string;
  title: string;
  published: string;
  url: string;
  thumbnailUrl: string;
}

function parseEntry(entryXml: string): YouTubeVideo | null {
  const id =
    entryXml.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1]?.trim() ??
    entryXml.match(/<id>yt:video:([^<]+)<\/id>/)?.[1]?.trim();

  const title =
    entryXml.match(/<title>([^<]+)<\/title>/)?.[1]?.trim() ??
    entryXml.match(/<media:title>([^<]+)<\/media:title>/)?.[1]?.trim();

  const published = entryXml.match(/<published>([^<]+)<\/published>/)?.[1]?.trim();
  const url =
    entryXml.match(/<link rel="alternate" href="([^"]+)"/)?.[1]?.trim() ??
    (id ? `https://www.youtube.com/watch?v=${id}` : undefined);

  const thumbnailUrl =
    entryXml.match(/<media:thumbnail url="([^"]+)"/)?.[1]?.trim() ??
    (id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : undefined);

  if (!id || !title || !published || !url || !thumbnailUrl) {
    return null;
  }

  return { id, title, published, url, thumbnailUrl };
}

function parseYouTubeFeed(xml: string): YouTubeVideo[] {
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];
  return entries
    .map(parseEntry)
    .filter((video): video is YouTubeVideo => video !== null);
}

export async function getRecentYouTubeVideos(
  limit = 3,
): Promise<YouTubeVideo[]> {
  try {
    const response = await fetch(YOUTUBE_FEED_URL);

    if (!response.ok) {
      console.warn(
        `[youtube] Feed request failed (${response.status}); section will show channel CTA only.`,
      );
      return [];
    }

    const xml = await response.text();
    return parseYouTubeFeed(xml).slice(0, limit);
  } catch (error) {
    console.warn("[youtube] Failed to fetch feed; section will show channel CTA only.", error);
    return [];
  }
}
