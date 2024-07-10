import { FC } from 'react'
import { CardText, CardTitle, Item } from '../BeansList/BeansList.styled'

type PropsFactsItem = {
  title: string | number
  description: string
}

const FactsItem: FC<PropsFactsItem> = ({ title, description }) => {
  return (
    <Item>
      <CardTitle>{title}</CardTitle>
      <CardText>{description}</CardText>
    </Item>
  )
}

export default FactsItem
