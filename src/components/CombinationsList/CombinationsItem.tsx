import { CardText, CardTitle, Item } from '../BeansList/BeansList.styled'
import { FC } from 'react'

type PropsCombinationsItem = {
  name: string
  tag: string[]
}

const CombinationsItem: FC<PropsCombinationsItem> = ({ name, tag }) => {
  return (
    <Item>
      <CardTitle>{name}</CardTitle>
      <CardText>{tag.filter((tag) => tag !== '+').join(', ')}</CardText>
    </Item>
  )
}

export default CombinationsItem
