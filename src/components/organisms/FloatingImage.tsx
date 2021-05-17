import { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { PageComponent } from "../templates/PageBuilder"
import TextBlock from "./TextBlock";

interface Props {
  component: PageComponent,
  defaultAlignment?: 'left' | 'right',
}

const FloatingImage = ({component, defaultAlignment}: Props) => {
  const { text, image, caption, position } = component;
  
  const alignment = position !== 'auto' ? position : defaultAlignment;

  const content = [
      <img className="object-contain" src={image} />,
      <TextBlock component={component} />
  ]

  return (
    <div className={`flex flex-row gap-5 ${alignment === 'right' ? 'justify-between' : '' }`}>
      {(alignment === 'left' ? content : content.reverse()).map((item, idx) => (<Fragment key={idx}>{item}</Fragment>))}
    </div>
  )
}

export default FloatingImage