import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog");

  return rss({
    title: "DJM Tech Blog",
    description:
      "Thoughts on web development, technology, and building better software",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary || post.data.description || "",
      pubDate: new Date(post.data.date),
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
