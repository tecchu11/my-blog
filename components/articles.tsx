import { Post } from "@/.contentlayer/generated";
import Link from "next/link";

interface ArticlesProps {
  posts: Post[]
}

function sortedPost(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function Articles({ posts }: ArticlesProps) {
  return (
    <>
      <div className="prose dark:prose-invert">
        {sortedPost(posts).map((post) => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.description}</p>
          </article>
        ))}
      </div>
    </>
  )
}
