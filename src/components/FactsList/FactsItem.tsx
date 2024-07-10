import { ForwardedRef, forwardRef } from 'react'
import { CardText, CardTitle, Item } from '../BeansList/BeansList.styled'

type PropsFactsItem = {
  title: string | number
  id: string | number
  description: string
}

const FactsItem = forwardRef<HTMLLIElement, PropsFactsItem>(
  ({ id, title, description, ...props }, ref: ForwardedRef<HTMLLIElement>) => {
    return (
      <Item ref={ref}>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </Item>
    )
  }
)

export default FactsItem
