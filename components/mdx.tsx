import NextImage, { ImageProps } from 'next/image'
import { MDXContent } from '@content-collections/mdx/react'
import { LinkProps } from 'next/link'
import { Code } from 'bright'
import NextLink from 'next/link'

Code.theme = {
    dark: 'material-darker',
    light: 'material-lighter',
    lightSelector: 'html.light',
}

const components = {
    Image: (props: ImageProps) => <NextImage {...props} />,
    Link: (props: LinkProps) => <NextLink {...props} />,
    pre: Code,
}

interface MdxProps {
    code: string
}

export function Mdx({ code }: MdxProps) {
    return <MDXContent code={code} components={components} />
}
