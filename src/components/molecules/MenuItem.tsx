import ActiveLink from "../atoms/ActiveLink"

interface Props {
  label: string
  href: string
}

const MenuItem = ({label, href}: Props) => {

  return (
      <ActiveLink
        className="border px-5 py-2 no-underline text-white"
        inactiveClassName="border-clear hover:text-gray-400"
        activeClassName="border-black-500 hover:text-white" 
        href={href}
      >
        <h2>{label}</h2>
      </ActiveLink>
  )  
}

export default MenuItem