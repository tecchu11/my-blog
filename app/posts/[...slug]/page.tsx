import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { Mdx } from '@/components/mdx'
import { Tags } from '@/components/tags'
import { getPostBySlug, getPosts } from '@/lib/post'

type PostProps = {
    params: Promise<{
        slug: string[]
    }>
}

export function generateStaticParams() {
    return getPosts().map((post) => ({
        slug: post.slugAsParams.split('/'),
    }))
}

export async function generateMetadata({
    params,
}: PostProps): Promise<Metadata> {
    const key = (await params).slug.join('/')
    const post = getPostBySlug(key)
    if (!post) return {}

    return {
        title: post.title,
        description: post.description,
    }
}

export default async function PostPage({ params }: PostProps) {
    const key = (await params).slug.join('/')
    const post = getPostBySlug(key)

    if (!post) notFound()

    return (
        <article className="py-6 prose dark:prose-invert">
            <p className="text-slate-700 dark:text-slate-200">
                {new Date(post.date).toLocaleDateString('ja-JP')}
            </p>
            <h1>{post.title}</h1>
            <Tags tags={post.tags} />
            <hr className="my-4" />
            <Mdx code={post.mdx} />
        </article>
    )
}
