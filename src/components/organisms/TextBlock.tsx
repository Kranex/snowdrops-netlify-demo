import ReactMarkdown from "react-markdown";
import { PageComponent } from "../templates/PageBuilder"

interface Props {
  component: PageComponent,
}

const TextBlock = ({component}: Props) => {
  const { text } = component;
  return (
    <ReactMarkdown 
      className="text-xl text-white text-justify"
      skipHtml
      components={{
        h1: ({node, ...props}) => <h1 className="text-green-400 text-3xl text-center py-2" {...props} />,
        h3: ({node, ...props}) => <h1 className="text-center py-2" {...props} />,
        p: ({node, ...props}) => <p className="whitespace-pre-line py-2" {...props} />,
      }}
      children={text}
    />
  )
}

export default TextBlock