import { Carousel } from 'react-responsive-carousel';
import FloatWrapper, { FloatWrapperProps } from '../../molecules/FloatWrapper';
import { RawImage } from '../blocks/Image';

import galleries from '../../../../public/assets/galleries/manifest.yml'
import { CSSProperties } from 'react';

export interface TilesProps extends FloatWrapperProps {
  type: 'tiles'
  gallery: string
  rows: number
  cols: number
  aspect: string
}

const Tiles = ({ type, gallery, rows, cols, aspect, ...floatProps }: TilesProps) => {
  const name = gallery.split('/').pop().replace('.zip', '');
  
  const items : Element[] = galleries[name].map((img: string) => (
    <RawImage key={img} image={`/assets/galleries/${name}/${img}`} aspect={aspect} />
  ))

  const gridStyle:CSSProperties = {
    gridAutoFlow:
      cols === 0 ? 'column' : 'row',
    gridAutoColumns:
      cols === 0 ? 'auto' : undefined,
    gridAutoRows:
      rows === 0 ? 'auto' : undefined,
    gridTemplateRows: rows > 0 && `repeat(${rows}, minmax(0, 1fr))`, 
    gridTemplateColumns: cols > 0 && `repeat(${cols}, minmax(0, 1fr))`
  }

  return (
    <FloatWrapper {...floatProps} >
      <div
        className={`grid w-full gap-2`} 
        style={gridStyle}>
        { cols > 0 && rows > 0 ? items.slice(0, cols * rows) : items}
      </div>
    </FloatWrapper>
  )
}

export default Tiles