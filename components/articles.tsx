import { Post } from '@/.content-collections/generated'
import Link from 'next/link'

interface ArticlesProps {
    posts: Post[]
}

interface ArticleLinkProps {
    post: Post
}

function ArticleLink({ post }: ArticleLinkProps) {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-slate-700 dark:text-slate-200">
                {new Date(post.date).toLocaleDateString('ja-JP')}
            </p>
            <Link href={post.slug} className="text-2xl font-bold">
                {post.title}
            </Link>
            <p>{post.description}</p>
        </div>
    )
}

export function Articles({ posts }: ArticlesProps) {
    return (
        <div className="max-w-full flex flex-col gap-8 py-4">
            {posts.map((post) => (
                <ArticleLink key={post.slugAsParams} post={post} />
            ))}
        </div>
    )
}
