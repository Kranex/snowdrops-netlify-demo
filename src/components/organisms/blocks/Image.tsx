import { Fragment } from "react";
import { PageComponent } from "../../templates/PageBuilder"
import TextBlock from "./Text";

interface Props {
  component: PageComponent,
  defaultAlignment?: 'left' | 'right',
}

const getAlignment = (position: string) => {
  switch (position) {
    case 'left':
    case 'right':
    case 'center':
      return position;
    default:
      return null;
  }
}

const ImageBlock = ({component, defaultAlignment}: Props) => {
  const classes = 'md:width-1/4 md:width-1/3 md:width-1/2 md:width-full md:float-left md:float-right';

  const { image, caption, width, position } = component;
  
  const alignment = getAlignment(position) || defaultAlignment;

  
  const float = alignment !== 'center' ? `md:float-${alignment}` : 'mx-auto'

  // return <img className={`object-scale-down w-full md:w-1/3 md:py-4 ${float} ${padding}`} src={image} />

  return (
    <div className={`relative w-full md:w-${width} p-2 md:py-4 ${float}`}>
      <div className={`relative w-full`}>
        <img className={`object-cover w-full`} src={image} />
        { caption &&
          <figcaption className={`absolute text-white w-full bottom-0 text-center py-2 bg-black bg-opacity-40 backdrop-filter backdrop-blur`}>{caption}</figcaption>
        }
      </div>
    </div>
  )
}

export default ImageBlock