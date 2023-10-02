import NextImage, { ImageProps } from "next/image"
import { useMDXComponent } from 'next-contentlayer/hooks';
import NextLink, { LinkProps } from "next/link";

const components = {
  Image: (props: ImageProps) => <NextImage {...props} />,
  Link: (props: LinkProps) => <NextLink {...props} />,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
