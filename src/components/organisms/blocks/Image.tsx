import FloatWrapper, { FloatWrapperProps } from "../../molecules/FloatWrapper"

export interface RawImageProps {
  type?: 'image'
  image: string
  caption?: string
  aspect: string
}

export type ImageProps = RawImageProps & FloatWrapperProps

export const RawImage = ({ image, caption, aspect }: RawImageProps) => {
  return (
    <div className="relative">
      {aspect !== 'none' && <div className={`aspect-ratio-${aspect}`} />}
      <img className={`${aspect !=='none' && 'absolute'} left-0 top-0 w-full h-full object-cover`} src={`${image.replace('/assets', '/assets/small')}`} alt={image} />
      { caption &&
        <figcaption className={`absolute text-white w-full bottom-0 text-center py-2 bg-black bg-opacity-40 backdrop-filter backdrop-blur`}>{caption}</figcaption>
      }
    </div>
  )
}

const Image = ({type, image, caption, aspect, ...floatProps}: ImageProps) => {
  return (
    <FloatWrapper {...floatProps} >
      <RawImage {...{ type, image, caption, aspect }} />
    </FloatWrapper>
  )
}

export default Image