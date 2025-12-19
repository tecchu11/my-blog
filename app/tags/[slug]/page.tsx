import { Articles } from "@/components/articles";
import { getAllTags, getPostsByTag } from "@/lib/post";
import { notFound } from "next/navigation";

type TagPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllTags().map((tag) => ({
    slug: tag,
  }));
}

export default async function TagPage({ params }: TagPageProps) {
  const tag = (await params).slug.toLocaleLowerCase();
  const posts = getPostsByTag(tag);
  if (posts.length === 0) notFound();

  return <Articles posts={posts} />;
}
