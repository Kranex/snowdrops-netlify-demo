import { PageComponent } from "../templates/PageBuilder";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

import galleries from '../../../public/assets/galleries/manifest.yml'

interface Props {
  component: PageComponent,
}

const Gallery = ({component}: Props) => {
  const { title, gallery } = component;

  const name = gallery.split('/').pop().replace('.zip', '');

  const items = galleries[name].map((img: string) => (
    <div>
      <img className="object-contain h-xl w-full" src={`/assets/galleries/${name}/${img}`} />
    </div>
  ))

  return (
    <div className="flex flex-col p-5">
      {title && <h1 className="text-green-400 text-3xl text-center pb-5">{title}</h1>}
      <Carousel autoPlay={true} infiniteLoop={true} showArrows={true} showThumbs={false} >
        {items}
      </Carousel>
    </div>
  )
}

export default Gallery