import { Post } from '@/.content-collections/generated'
import Link from 'next/link'
import { Tags } from './tags'

interface ArticlesProps {
    posts: Post[]
}

export function Articles({ posts }: ArticlesProps) {
    return (
        <div className="prose dark:prose-invert max-w-full">
            {posts.map((post) => (
                <div key={post.slug}>
                    <Link href={post.slug}>
                        <h2 className="text-2xl underline">{post.title}</h2>
                    </Link>
                    <Tags
                        className="flex flex-row gap-0.5 justify-start"
                        tags={post.tags}
                    />
                    <p className="text-sm">{post.description}</p>
                </div>
            ))}
        </div>
    )
}
