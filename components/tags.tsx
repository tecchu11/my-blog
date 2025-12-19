import Link from 'next/link'

interface TagsProps {
    tags: string[]
}

export function Tags({ tags }: TagsProps) {
    return (
        <>
            {tags.map((tag) => {
                return (
                    <span
                        key={tag}
                        className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
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
        </>
    )
}
