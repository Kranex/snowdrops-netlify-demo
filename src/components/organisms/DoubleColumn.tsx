
import PageBuilder, { PageComponent } from "../templates/PageBuilder"

interface Props {
  component: PageComponent,
}

const DoubleColumn = ({component}: Props) => {
  const { left_column, right_column } = component;

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-5 items-center px-5">
        <div className="flex flex-col gap-10 h-full">
            <PageBuilder components={left_column} />
        </div>
        <div className="flex flex-col gap-10 h-full">
            <PageBuilder components={right_column} />
        </div>
    </div>
  )
}

export default DoubleColumn