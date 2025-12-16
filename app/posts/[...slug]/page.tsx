import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Mdx } from "@/components/mdx-components";
import { Tags } from "@/components/tags";
import { allPosts } from "@/.content-collections/generated";

type PostProps = {
  params: Promise<{
    slug: string[];
  }>;
};

async function getPost(params: PostProps["params"]) {
  const { slug } = await params;
  const key = slug.join("/");
  return allPosts.find((p) => p.slugAsParams === key);
}

export function generateStaticParams() {
  return allPosts.map((p) => ({
    slug: p.slugAsParams.split("/"),
  }));
}

export async function generateMetadata(props: PostProps): Promise<Metadata> {
  const post = await getPost(props.params);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage(props: PostProps) {
  const post = await getPost(props.params);
  if (!post) notFound();

  return (
    <article className="py-6 prose dark:prose-invert">
      <p className="text-slate-700 dark:text-slate-200">
        {new Date(post.date).toLocaleDateString("ja-JP")}
      </p>
      <h1>{post.title}</h1>
      <Tags tags={post.tags} />
      <hr className="my-4" />
      <Mdx code={post.mdx} />
    </article>
  );
}
