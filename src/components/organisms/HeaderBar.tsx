import { links } from "../../../utils/links"
import ActiveLink from "../atoms/ActiveLink"
import MenuItem from "../molecules/MenuItem"

const HeaderBar = () => {

  return (
    <header className="fixed top-0 flex flex-row justify-end w-full bg-black bg-opacity-50">
      <div className="flex flex-row p-2 items-center">
        <MenuItem label="HOME" href={links.index} />
        <MenuItem label="THANKS FOR GETTING INVOLVED" href={links.thanks} />
        <MenuItem label="JAMES ALLEN'S STORY" href={links.james_allen} />
      </div>
    </header>
  )
}

export default HeaderBar