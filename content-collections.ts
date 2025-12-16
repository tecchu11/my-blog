import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "content",
  include: "posts/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    const slug = document._meta.filePath.replace(/\.mdx$/, "");
    const slugAsParams = slug.replace(/^posts\//, "");
    return {
      ...document,
      mdx,
      slug,
      slugAsParams,
    };
  },
});
const pages = defineCollection({
  name: "pages",
  directory: "content",
  include: "pages/*.mdx",
  schema: z.object({
      title: z.string(),
      description: z.string().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    const slug = document._meta.filePath.replace(/\.mdx$/, "");
    const slugAsParams = slug.replace(/^pages\//, "");
    return {
      ...document,
      mdx,
      slug,
      slugAsParams,
    };
  },
});

export default defineConfig({
  collections: [posts, pages],
});
