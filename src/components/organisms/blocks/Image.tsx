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

const getPadding = (alignment: string) => {
  switch (alignment) {
    case 'left':
      return `pr-4`
    case 'right':
      return `pl-4`
    case 'center':
      return `px-2`
  }
}

const ImageBlock = ({component, defaultAlignment}: Props) => {
  const classes = 'pr-4 px-2 md:float-left md:float-right';

  const { image, caption, position } = component;
  
  const alignment = getAlignment(position) || defaultAlignment;

  const padding = getPadding(alignment);
  
  const float = alignment !== 'center' ? `md:float-${alignment}` : 'mx-auto'

  return <img className={`object-scale-down w-full md:w-1/3 md:py-4 ${float} ${padding}`} src={image} />
}

export default ImageBlock