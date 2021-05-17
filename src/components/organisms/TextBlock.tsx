import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { PageComponent } from "../templates/PageBuilder"

interface Props {
  component: PageComponent,
}

const TextBlock = ({component}: Props) => {
  const { title, text } = component;
  
  return (
    <div className="py-5">  
      {title && <>
        <h1 className="text-green-400 text-3xl text-center pb-5">{title}</h1>
      </>}
      <ReactMarkdown 
        className="text-xl text-white text-justify"
        rehypePlugins={[rehypeRaw]}
        children={text}
      />
    </div>
  )
}

export default TextBlock