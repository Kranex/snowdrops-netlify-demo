import { attributes } from '../../../content/navbar.md'
import MenuItem from "../molecules/MenuItem"

type NavLink = {
    label: string,
    page: string
}

const NavBar = () => {

  const { links } = attributes;

  const items = (links as NavLink[]).map((link: NavLink) => (
    <MenuItem key={link.page} label={link.label.toUpperCase()} href={`/${link.page}`}/>
  ))

  return (
    <div className="fixed z-10 top-0 flex flex-row justify-center w-full bg-black bg-opacity-50 backdrop-filter backdrop-blur">
      <div className="flex flex-row justify-end w-full">
        <div className="hidden md:flex flex-row p-2 items-center">
          <MenuItem label="HOME" href="/" /> 
          {items}
        </div>
        <div className="flex md:hidden flex-row p-2 items-center">
          <MenuItem label="HOME" href="/" /> 
          {items}
        </div>
      </div>
    </div>
  )
}

export default NavBar