import { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { PageComponent } from "../templates/PageBuilder"
import TextBlock from "./TextBlock";

interface Props {
  component: PageComponent,
}

const DoubleImage = ({component}: Props) => {
  const { left_image, right_image, left_caption, right_caption } = component;

  return (
    <div className="grid grid-cols-2 gap-5 items-center px-5">
      <div className="relative">
        <img className="object-cover h-64 w-full" src={left_image} />
        {left_caption &&
          <figcaption className="absolute text-white bottom-0 inset-x-0 text-center py-2 bg-black bg-opacity-40 backdrop-filter backdrop-blur">{left_caption}</figcaption>
        }
      </div>
      <div className="relative">
        <img className="object-cover h-64 w-full" src={right_image} />
        {right_caption &&
          <figcaption className="absolute text-white bottom-0 inset-x-0 text-center py-2 bg-black bg-opacity-40 backdrop-filter backdrop-blur">{right_caption}</figcaption>
        }
      </div>
    </div>
  )
}

export default DoubleImage