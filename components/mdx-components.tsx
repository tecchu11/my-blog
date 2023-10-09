import NextImage, { ImageProps } from "next/image"
import { useMDXComponent } from 'next-contentlayer/hooks';
import NextLink, { LinkProps } from "next/link";
import { Code } from "bright"

Code.theme = {
  dark: "github-dark",
  light: "github-light",
  lightSelector: "html.light",
}
Code.lineNumbers = true

const components = {
  Image: (props: ImageProps) => <NextImage {...props} />,
  Link: (props: LinkProps) => <NextLink {...props} />,
  pre: Code,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
