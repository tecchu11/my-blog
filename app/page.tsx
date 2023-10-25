import { Post, allPosts } from "@/.contentlayer/generated"
import { Articles } from "@/components/articles"

export default function Home() {
  return <Articles posts={allPosts} />
}
