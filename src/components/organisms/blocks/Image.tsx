export interface ImageProps {
  type: 'image'
  image: string
  caption?: string
  position: string
  position_mobile: string
  width: string
  aspect: string
  defaultAlignment?: 'left' | 'right',
}

const Image = ({image, caption, width, aspect, position, position_mobile, defaultAlignment}: ImageProps) => {
  const classes = `
    w-1/4 w-1/3 w-1/2 w-full lg:w-1/4 lg:w-1/3 lg:w-1/2 lg:w-full
    float-left float-right lg:float-left lg:float-right
    aspect-ratio-none aspect-ratio-1/1 aspect-ratio-3/2 aspect-ratio-2/3 aspect-ratio-4/3 aspect-ratio-3/4 aspect-ratio-16/9 aspect-ratio-9/16
  `;
  
  const alignment = position === 'auto' ? defaultAlignment : position
  const alignmentMobile = position_mobile === 'auto' ? alignment : position_mobile

  
  const float = alignment !== 'center' && `float-${alignment}`
  const floatMobile = alignmentMobile !== 'center' && `float-${alignmentMobile}`

  const size =  alignmentMobile === 'center' ? `w-1/2 lg:w-${width}` : `w-${width}`
  // return <img className={`object-scale-down w-full md:w-1/3 md:py-4 ${float} ${padding}`} src={image} />

  return (
    <div className={`relative ${size} Mobile mx-auto p-2 lg:py-4 ${floatMobile} lg:${float}`}>
      <div className={`relative`}>
        {aspect !== 'none' && <div className={`aspect-ratio-${aspect}`} />}
        <img className={`${aspect !=='none' && 'absolute'} left-0 top-0 w-full h-full object-cover`} src={image} />
        { caption &&
          <figcaption className={`absolute text-white w-full bottom-0 text-center py-2 bg-black bg-opacity-40 backdrop-filter backdrop-blur`}>{caption}</figcaption>
        }
      </div>
    </div>
  )
}

export default Image