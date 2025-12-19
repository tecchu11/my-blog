import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Mdx } from "@/components/mdx";
import { getPageBySlug, getPages } from "@/lib/page";

type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export function generateStaticParams() {
  return getPages().map((p) => ({
    slug: p.slugAsParams.split("/"),
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = (await params).slug.join("/");
  const page = getPageBySlug(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function Page({ params }: PageProps) {
  const slug = (await params).slug.join("/");
  const page = getPageBySlug(slug);

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
