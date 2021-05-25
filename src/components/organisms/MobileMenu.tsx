import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode, useRef, useState } from "react";
import { links } from "../../../utils/links";
import { useOnClickOutside } from "../hooks/OnClickOutside";
import MenuItem from "../molecules/MenuItem";

library.add(faBars);

interface Props {
  children: ReactNode;
}

const MobileMenu = ({children}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const menuItems = links.map((link) => (
    <MenuItem className="min-w-max text-center" key={link.page} label={link.label.toUpperCase()} href={`/${link.page}`}/>
  ))
 
  const mobileMenu = (
    <div className="flex w-full h-full">
      <div className="flex flex-col w-3/4 min-width-max h-full mx-auto py-5" onClick={() => setMenuOpen(false)}>
        {menuItems}
      </div>
    </div>
  )
  
  return (
    <>
      <div className={`${menuOpen ? '' : 'fixed bg-black bg-opacity-50 backdrop-filter backdrop-blur '} z-10 top-0 flex flex-row justify-end w-full`}>
        <div className="p-3" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ?
            <FontAwesomeIcon className="text-white fa-rotate-90 fa-lg" icon={['fas', 'bars']} title="Menu" />
            : 
            <FontAwesomeIcon className="text-white fa-lg" icon={['fas', 'bars']} title="Menu" />
          }
        </div>
      </div>
      {menuOpen ?  mobileMenu : children}
    </>
  )
}

export default MobileMenu;