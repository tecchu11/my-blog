import { Tags } from './tags'

interface ArticleProp {
    date?: Date
    title: string
    tags: string[]
    children: React.ReactNode
}

export function Article({ date, title, tags, children }: ArticleProp) {
    return (
        <article className="flex flex-col max-w-full py-4 gap-10">
            <div className="flex flex-col gap-4 pb-4 border-b-[0.5px]">
                {date && (
                    <p className="text-slate-700 dark:text-slate-200">
                        {date.toLocaleDateString('ja-JP')}
                    </p>
                )}
                <h1 className="text-4xl font-bold">{title}</h1>
                {tags.length > 0 && (
                    <Tags tags={tags} className="flex flex-row gap-0.5" />
                )}
            </div>
            <div className="prose dark:prose-invert max-w-fit">{children}</div>
        </article>
    )
}
