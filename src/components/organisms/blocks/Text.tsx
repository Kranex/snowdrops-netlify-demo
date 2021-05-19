import ReactMarkdown from "react-markdown";

export interface TextProps {
  type: 'text'
  text: string
}

const Text = ({ text }: TextProps) => {
  return (
    <ReactMarkdown 
      className="text-xl text-white text-justify px-2"
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

export default Text