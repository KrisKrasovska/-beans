import { FC } from 'react'
import { CardText, CardTitle, Item } from '../BeansList/BeansList.styled'
import { Link } from 'react-router-dom'

type PropsRecipesItem = {
  recipeId: number
  name: string
  description: string
  totalTime: string
  makingAmount: string
}

const RecipesItem: FC<PropsRecipesItem> = ({
  recipeId,
  name,
  description,
  totalTime,
  makingAmount,
}) => {
  return (
    <Item>
      <CardTitle>{name}</CardTitle>
      <CardText>{description}</CardText>
      <CardText>{makingAmount}</CardText>
      <CardText>{totalTime}</CardText>
      <Link to={`/recipes/${recipeId}`}>View more details</Link>
    </Item>
  )
}

export default RecipesItem
