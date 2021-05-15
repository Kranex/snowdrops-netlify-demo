import ActiveLink from "../atoms/ActiveLink"

interface Props {
  label: string
  href: string
}

const MenuItem = ({label, href}: Props) => {

  return (
      <ActiveLink className="border mr-5 px-5 py-2 no-underline text-white" inactiveClassName="border-clear" activeClassName="border-black-500" href={href}>
        <h2>{label}</h2>
      </ActiveLink>
  )  
}

export default MenuItem