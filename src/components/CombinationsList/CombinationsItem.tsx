import { ForwardedRef, forwardRef } from 'react'
import { CardText, CardTitle, Item } from '../BeansList/BeansList.styled'

type PropsCombinationsItem = {
  name: string
  id: number
  tag: string[]
}

const CombinationsItem = forwardRef<HTMLLIElement, PropsCombinationsItem>(
  ({ id, name, tag, ...props }, ref: ForwardedRef<HTMLLIElement>) => {
    return (
      <Item ref={ref}>
        <CardTitle>{name}</CardTitle>
        <CardText>{tag.filter((tag) => tag !== '+').join(', ')}</CardText>
      </Item>
    )
  }
)

export default CombinationsItem
