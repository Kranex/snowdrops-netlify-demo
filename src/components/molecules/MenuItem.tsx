import ActiveLink from "../atoms/ActiveLink"

interface Props {
  label: string
  href: string
  className?: string
}

const MenuItem = ({label, href, className}: Props) => {
  return (
      <ActiveLink
        className={`border px-5 py-2 no-underline text-white ${className}`.trim()}
        inactiveClassName="border-clear hover:text-gray-400"
        activeClassName="border-black-500 hover:text-white" 
        href={href}
      >
        <h2>{label}</h2>
      </ActiveLink>
  )  
}

export default MenuItem