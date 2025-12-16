import { allPosts } from "@/.content-collections/generated";
import { Articles } from "@/components/articles";

export default function Home() {
  return <Articles posts={allPosts} />;
}
