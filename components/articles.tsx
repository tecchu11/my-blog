import { Post } from '@/.content-collections/generated'
import Link from 'next/link'

interface ArticlesProps {
    posts: Post[]
}

export function Articles({ posts }: ArticlesProps) {
    return (
        <>
            <div>
                {posts.map((post) => (
                    <article
                        className="prose dark:prose-invert"
                        key={post.slug}
                    >
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
