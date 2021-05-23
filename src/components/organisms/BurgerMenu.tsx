import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { ReactNode } from "react-markdown";
import { useOnClickOutside } from "../hooks/OnClickOutside";

library.add(faBars)

interface Props {
  children: ReactNode
}

const BurgerMenu = ({children}: Props) => {
  const ref = useRef();
  const [isOpen, setOpen] = useState(false);

  useOnClickOutside(ref, () => setOpen(false))

  return (
    <div className="flex flex-col h-full justify-center pl-5 pr-2" onClick={() => setOpen((open) => !open)} >
      {isOpen ? (
        <>
          <div className="flex flex-col" ref={ref}>
            <FontAwesomeIcon className="text-white fa-rotate-90 fa-lg" icon={['fas', 'bars']} title="Menu" />
            <div className="relative min-w-max">
              <div className="absolute -right-5 top-4 flex flex-col min-w-max bg-black bg-opacity-80">
                {children}
              </div>
            </div> 
          </div>
        </>
      ):(
        <FontAwesomeIcon className="text-white fa-lg" icon={['fas', 'bars']} title="Menu" />
      )}
    </div>
  )
}

export default BurgerMenu;