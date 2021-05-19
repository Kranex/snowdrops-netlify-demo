import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
  icon: IconProp,
  href: string,
  className?: string,
}

const IconLink = ({icon, href, className}: Props) => {
  return (
    <a href={href} className={className}>
      <FontAwesomeIcon icon={icon} title={`link to ${href}`} />
    </a>
  )
}

export default IconLink