import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { getPostBySlug, getPosts } from '@/lib/post'
import { Article } from '@/components/article'
import { Mdx } from '@/components/mdx'

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
        <Article date={new Date(post.date)} title={post.title} tags={post.tags}>
            <Mdx code={post.mdx} />
        </Article>
    )
}
