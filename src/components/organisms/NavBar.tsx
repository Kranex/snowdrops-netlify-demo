import { links } from "../../../utils/links"
import ActiveLink from "../atoms/ActiveLink"
import MenuItem from "../molecules/MenuItem"

const NavBar = () => {

  return (
    <div className="fixed z-10 top-0 flex flex-row justify-center w-full bg-black backdrop-opacity-50 backdrop-filter backdrop-blur">
      <div className="flex flex-row justify-end w-full">
        <div className="hidden md:flex flex-row p-2 items-center">
          <MenuItem label="HOME" href={links.index} />
          <MenuItem label="THANKS FOR GETTING INVOLVED" href={links.thanks} />
          <MenuItem label="JAMES ALLEN'S STORY" href={links.james_allen} />
        </div>
        <div className="flex md:hidden flex-row p-2 items-center">
          <MenuItem label="HOME" href={links.index} />
          <MenuItem label="THANKS" href={links.thanks} />
          <MenuItem label="JAMES" href={links.james_allen} />
        </div>
      </div>
    </div>
  )
}

export default NavBar