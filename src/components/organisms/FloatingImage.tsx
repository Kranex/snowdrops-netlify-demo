import { Fragment } from "react";
import { PageComponent } from "../templates/PageBuilder"
import TextBlock from "./TextBlock";

interface Props {
  component: PageComponent,
  defaultAlignment?: 'left' | 'right',
}

const FloatingImage = ({component, defaultAlignment}: Props) => {
  const { image, caption, position } = component;
  
  const alignment = position !== 'auto' ? position : defaultAlignment;

  const padding = `${alignment === 'left' ? 'pr-5' : 'pl-5'}`
  /**
  const content = [
      <img className="object-contain" src={image} />,
      <TextBlock component={component} />
  ]

  return (
    <div className={`flex flex-row gap-5 ${alignment === 'right' ? 'justify-between' : '' }`}>
      {(alignment === 'left' ? content : content.reverse()).map((item, idx) => (<Fragment key={idx}>{item}</Fragment>))}
    </div>
  )
  */
  return <img className={`object-scale-down w-full md:w-1/3 md:float-${alignment} md:py-5 ${padding}`} src={image} />
}

export default FloatingImage