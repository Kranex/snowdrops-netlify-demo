import attributes from '../../../content/navbar.yml'
import MenuItem from "../molecules/MenuItem"
import BurgerMenu from './BurgerMenu';

type NavLink = {
    label: string,
    page: string
}

const NavBar = () => {

  const { primary_links, secondary_links } = attributes;

  const primary = (primary_links as NavLink[]).map((link: NavLink) => (
    <MenuItem key={link.page} label={link.label.toUpperCase()} href={`/${link.page}`}/>
  ))
  
  const secondary = (secondary_links as NavLink[]).map((link: NavLink) => (
    <MenuItem key={link.page} label={link.label.toUpperCase()} href={`/${link.page}`}/>
  ))

  return (
    <div className="fixed z-10 top-0 flex flex-row justify-center w-full bg-black bg-opacity-50 backdrop-filter backdrop-blur">
      <div className="flex flex-row justify-end w-full">
        <div className="hidden lg:flex flex-row p-2 items-center">
          <MenuItem label="HOME" href="/" /> 
          {primary}
          <BurgerMenu>
            {secondary}
          </BurgerMenu>
        </div>
        <div className="flex lg:hidden flex-row p-2 items-center">
          <BurgerMenu>
            <MenuItem label="HOME" href="/" /> 
            {primary}
            {secondary}
          </BurgerMenu>
        </div>
      </div>
    </div>
  )
}

export default NavBar