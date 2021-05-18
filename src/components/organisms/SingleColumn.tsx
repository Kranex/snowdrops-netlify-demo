
import PageBuilder, { PageComponent } from "../templates/PageBuilder"

interface Props {
  component: PageComponent,
}

const SingleColumn = ({component}: Props) => {
  const { content } = component;

  return (
    <div className="flex flex-col h-full">
        <div className="h-full">
            <PageBuilder components={content} />
        </div>
    </div>
  )
}

export default SingleColumn