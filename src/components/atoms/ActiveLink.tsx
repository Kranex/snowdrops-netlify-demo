import { useRouter } from 'next/router'
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode;
  className: string;
  inactiveClassName: string;
  activeClassName: string;
  href: string;
  as?: string;
}

const ActiveLink = ({ children, className, inactiveClassName, activeClassName, href, as, ...props }: Props) => {
  const { asPath } = useRouter()

  console.log(asPath)

  className = 
    asPath === href || asPath === as
      ? `${className} ${activeClassName}`.trim()
      :  `${className} ${inactiveClassName}`.trim()

  return (
    <Link href={href} as={as} {...props}>
        <a className={className}>{children}</a>
    </Link>
  )
}

export default ActiveLink
