import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { primary_links, secondary_links } from '../../../utils/links';
import { useOnClickOutside } from '../hooks/OnClickOutside';
import MenuItem from "../molecules/MenuItem"

library.add(faBars);


const NavBar = () => {
  const menuRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);


  const primary = (primary_links).map((link) => (
    <MenuItem key={link.page} label={link.label.toUpperCase()} href={`/${link.page}`}/>
  ))
  
  const secondary = (secondary_links).map((link) => (
    <MenuItem className="w-full" key={link.page} label={link.label.toUpperCase()} href={`/${link.page}`}/>
  ))

  useOnClickOutside(menuRef, () => setMenuOpen(false))

  return (
    <div className="fixed z-10 top-0 flex flex-row justify-center w-full">
      <div className="flex flex-col justify-end w-full">
        <div className="flex flex-row justify-end w-full bg-black bg-opacity-50 backdrop-filter backdrop-blur">
          <div className="flex flex-row p-2 items-center">
            <MenuItem label="HOME" href="/" /> 
            {primary}
          </div>
          <div ref={menuRef} className="flex flex-col h-full justify-between" onClick={() => setMenuOpen((prev) => !prev)} >
            <div className="flex-grow flex pl-3 pr-3 items-center">
              {menuOpen ?
                <FontAwesomeIcon className="flex-grow text-white fa-rotate-90 fa-lg" icon={['fas', 'bars']} title="Menu" />
                : 
                <FontAwesomeIcon className="flex-grow text-white fa-lg" icon={['fas', 'bars']} title="Menu" />
              }
            </div>
            {menuOpen &&
              <div className="relative h-0 r-0">
                <div className="absolute flex flex-col top-0 min-w-max right-0 items-end bg-black bg-opacity-50 backdrop-filter backdrop-blur">
                  {secondary}
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar