import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { Mdx } from '@/components/mdx'
import { getPageBySlug, getPages } from '@/lib/page'
import { Article } from '@/components/article'

type PageProps = {
    params: Promise<{
        slug: string[]
    }>
}

export function generateStaticParams() {
    return getPages().map((p) => ({
        slug: p.slugAsParams.split('/'),
    }))
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const slug = (await params).slug.join('/')
    const page = getPageBySlug(slug)
    if (!page) return {}

    return {
        title: page.title,
        description: page.description,
    }
}

export default async function Page({ params }: PageProps) {
    const slug = (await params).slug.join('/')
    const page = getPageBySlug(slug)

    if (!page) notFound()

    return (
        <Article title={page.title} tags={[]}>
            <Mdx code={page.mdx} />
        </Article>
    )
}
