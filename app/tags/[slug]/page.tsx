import { allPosts } from "@/.content-collections/generated";
import { Articles } from "@/components/articles";
import { notFound } from "next/navigation";

type TagPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getPostsByTag(params: TagPageProps["params"]) {
  const { slug } = await params;
  const key = slug.toLowerCase();

  return allPosts.filter((post) =>
    post.tags.some((tag) => tag.toLowerCase() === key),
  );
}

export function generateStaticParams() {
  const tags = new Set<string>();

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag.toLowerCase()));
  });

  return Array.from(tags).map((tag) => ({
    slug: tag,
  }));
}

export default async function TagPage(props: TagPageProps) {
  const posts = await getPostsByTag(props.params);
  if (posts.length === 0) notFound();

  return <Articles posts={posts} />;
}
