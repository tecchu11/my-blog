import Link from 'next/link'

interface TagsProps {
    tags: string[]
    className: string
}

export function Tags({ tags, className }: TagsProps) {
    return (
        <div className={className}>
            {tags.map((tag) => {
                return (
                    <span
                        key={tag}
                        className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-white"
                    >
                        <Link
                            className="no-underline"
                            href={`/tags/${tag.toLowerCase()}`}
                        >
                            {tag}
                        </Link>
                    </span>
                )
            })}
        </div>
    )
}
