import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Mdx } from "@/components/mdx-components";
import { allPages } from "@/.content-collections/generated";

type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

async function getPage(params: PageProps["params"]) {
  const { slug } = await params;
  const key = slug.join("/");
  return allPages.find((p) => p.slugAsParams === key);
}

export function generateStaticParams() {
  return allPages.map((p) => ({
    slug: p.slugAsParams.split("/"),
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const page = await getPage(props.params);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function Page(props: PageProps) {
  const page = await getPage(props.params);
  if (!page) notFound();

  return (
    <article className="py-6 prose dark:prose-invert">
      <h1>{page.title}</h1>
      {page.description && <p className="text-xl">{page.description}</p>}
      <hr />
      <Mdx code={page.mdx} />
    </article>
  );
}
