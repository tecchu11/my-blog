import { allPages, Page } from "@/.content-collections/generated";

export function getPages(): Page[] {
  return allPages;
}

export function getPageBySlug(slug: string): Page | undefined {
  return getPages().find((page) => page.slugAsParams === slug);
}
