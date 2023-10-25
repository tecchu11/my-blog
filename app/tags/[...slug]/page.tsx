import { Articles } from "@/components/articles"
import { allPosts } from "contentlayer/generated"
import { notFound } from "next/navigation"

interface TagPageProps {
  params: {
    slug: string[]
  }
}

async function listPostFromParams(params: TagPageProps["params"]) {
  const slug = params?.slug?.join("/")
  return allPosts.filter((post) => post.tags.map((tag) => tag.toLowerCase()).includes(slug))
}

export async function generateStaticParams(): Promise<TagPageProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.tags.flatMap((tag) => tag.toLowerCase())
  }))
}

export default async function TagPage({ params }: TagPageProps) {
  const posts = await listPostFromParams(params)
  if (posts.length === 0) {
    notFound()
  }
  return <Articles posts={posts} />
}
