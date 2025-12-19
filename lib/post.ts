import { Post, allPosts } from "@/.content-collections/generated";

export function getPosts(): Post[] {
  return [...allPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getPostBySlug(slug: string): Post | undefined {
  return getPosts().find((post) => post.slugAsParams === slug);
}

export function getPostsByTag(tag: string): Post[] {
  const key = tag.toLowerCase();
  return getPosts().filter((post) =>
    post.tags.some((t) => t.toLowerCase() === key),
  );
}

export function getAllTags(): string[] {
  const tags = new Set<string>();

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags);
}
