import Image, { ImageProps } from "next/image";
import { MDXContent } from "@content-collections/mdx/react";
import { LinkProps } from "next/link";
import { Code } from "bright";
import Link from "next/link";

Code.theme = {
  dark: "github-dark",
  light: "github-light",
  lightSelector: "html.light",
};
Code.lineNumbers = true;

const components = {
  Image: (props: ImageProps) => <Image {...props} />,
  Link: (props: LinkProps) => <Link {...props} />,
  pre: Code,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  return <MDXContent code={code} components={components} />;
}
