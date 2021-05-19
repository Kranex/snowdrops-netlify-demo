import PageBuilder, { PageComponent } from "../../templates/PageBuilder"

export interface DoubleColumnProps {
  type: 'double_column'
  left_column: PageComponent[]
  right_column: PageComponent[]
}

const DoubleColumn = ({ left_column, right_column }: DoubleColumnProps) => {

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