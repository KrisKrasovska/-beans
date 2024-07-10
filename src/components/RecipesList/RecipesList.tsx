import { FC } from 'react'
import { RecipeType } from '../../types/types'
import { List } from '../BeansList/BeansList.styled'
import RecipesItem from './RecipesItem'

type PropsRecipesList = {
  recipesList: RecipeType[]
}

const RecipesList: FC<PropsRecipesList> = ({ recipesList }) => {
  return (
    <List>
      {recipesList.map(
        ({ recipeId, name, description, totalTime, makingAmount }) => (
          <RecipesItem
            key={recipeId}
            recipeId={recipeId}
            name={name}
            description={description}
            totalTime={totalTime}
            makingAmount={makingAmount}
          />
        )
      )}
    </List>
  )
}

export default RecipesList
