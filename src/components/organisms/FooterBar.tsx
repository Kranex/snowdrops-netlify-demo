import { attributes, react as HomeContent } from '../../../content/footer.md'
import IconLink from '../atoms/IconLink'

import { library } from "@fortawesome/fontawesome-svg-core"
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { links } from '../../../utils/links'

library.add(faFacebookF)
library.add(faTwitter)
library.add(faInstagram)
library.add(faEnvelope)


const FooterBar = () => {
  const {company_info, logo, copyright, facebook, twitter, instagram, email} = attributes

  return (
    <div className="p-10">
      <div className="flex flex-col items-center" >
        <div className="grid grid-cols-3 w-full max-w-screen-2xl gap-20 p-5 border-t-2 border-white text-white">
          <div className="flex flex-col items-center gap-5">
            <img className="object-none w-min" src={logo as string} />
            <div className="text-center italic">{copyright}</div>
          </div>
          <div className="whitespace-pre-line text-center">
            {company_info}
          </div>
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-lg font-medium">Contact Us</h1>
            <div className="flex flex-row gap-2">
              <IconLink icon={['fab' , 'facebook-f']} href={facebook as string} />
              <IconLink icon={['fab' , 'twitter']} href={twitter as string} />
              <IconLink icon={['fab' , 'instagram']} href={instagram as string} />
              <IconLink icon={'envelope'} href={email as string} />
            </div>
            <a className="border border-white py-3 px-7 no-underline" href={links.privacy}>
              PRIVACY POLICY
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterBar