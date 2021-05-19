import { Carousel } from 'react-responsive-carousel';

import galleries from '../../../../public/assets/galleries/manifest.yml'

export interface GalleryProps {
  type: 'gallery'
  gallery: string
}

const Gallery = ({ gallery }: GalleryProps) => {
  const name = gallery.split('/').pop().replace('.zip', '');

  const items = galleries[name].map((img: string) => (
    <div key={img}>
      <img className="object-contain h-xl w-full" src={`/assets/galleries/${name}/${img}`} />
    </div>
  ))

  return (
    <div className="flex flex-col p-5">
      <Carousel autoPlay={true} infiniteLoop={true} showArrows={true} showThumbs={false} >
        {items}
      </Carousel>
    </div>
  )
}

export default Gallery