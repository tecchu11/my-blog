import { Articles } from '@/components/articles'
import { getPosts } from '@/lib/post'

export default function Home() {
    return <Articles posts={getPosts()} />
}
