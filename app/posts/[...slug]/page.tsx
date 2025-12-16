import { notFound } from "next/navigation"

import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"
import { Tags } from "@/components/tags"
import { allPosts } from "@/.content-collections/generated"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params.slug.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      {/* <Image src="/blog-post-4.jpg" width="718" height="404" alt="Image" /> */}
      <p className="text-slate-700 dark:text-slate-200">{new Date(post.date).toLocaleDateString('ja-JP')}</p>
      <h1>{post.title}</h1>
      <Tags tags={post.tags} />
      <hr className="my-4" />
      <Mdx code={post.mdx} />
    </article>
  )
}
