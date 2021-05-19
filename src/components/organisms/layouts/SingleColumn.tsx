
import PageBuilder, { PageComponent } from "../../templates/PageBuilder"

export interface SingleColumnProps {
  type: 'single_column'
  content: PageComponent[]
}

const SingleColumn = ({ content }: SingleColumnProps) => {

  return (
    <div className="flex flex-col h-full">
        <div className="h-full">
            <PageBuilder components={content} />
        </div>
    </div>
  )
}

export default SingleColumn