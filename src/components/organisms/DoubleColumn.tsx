
import PageBuilder, { PageComponent } from "../templates/PageBuilder"

interface Props {
  component: PageComponent,
}

const DoubleColumn = ({component}: Props) => {
  const { left_column, right_column } = component;

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 items-center">
        <div className="h-full">
            <PageBuilder components={left_column} />
        </div>
        <div className="h-full">
            <PageBuilder components={right_column} />
        </div>
    </div>
  )
}

export default DoubleColumn