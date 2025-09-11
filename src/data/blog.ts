import { getCollection } from "astro:content";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  tags: string[];
  featured: boolean;
  readTime: number;
  image?: string;
}

// Get all blog posts from content collection
export async function getAllBlogPosts() {
  const posts = await getCollection("blog");
  return posts
    .map((post) => ({
      id: post.id,
      title: post.data.title,
      description: post.data.summary || post.data.description || "",
      slug: post.slug,
      date: post.data.date,
      tags: post.data.tags,
      featured: post.data.featured || false,
      readTime: post.data.readTime || 5,
      image: post.data.image || "/assets/og-default.png",
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getFeaturedPosts() {
  const posts = await getAllBlogPosts();
  return posts.filter((post) => post.featured);
}

export async function getPostsByTag(tag: string) {
  const posts = await getAllBlogPosts();
  return posts.filter((post) => post.tags.includes(tag));
}

export async function getRecentPosts(limit: number = 3) {
  const posts = await getAllBlogPosts();
  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export async function getAllTags() {
  const posts = await getAllBlogPosts();
  const tagSet = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}
