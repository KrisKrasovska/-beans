import { FC, RefObject } from 'react'
import { RecipeType } from '../../types/types'
import { List } from '../BeansList/BeansList.styled'
import RecipesItem from './RecipesItem'

type PropsRecipesList = {
  recipesList: RecipeType[]
  lastItem: RefObject<HTMLLIElement>
}

const RecipesList: FC<PropsRecipesList> = ({ recipesList, lastItem }) => {
  return (
    <List>
      {recipesList.map(
        ({ recipeId, name, description, totalTime, makingAmount }, index) => {
          if (index + 1 === recipesList.length) {
            return (
              <RecipesItem
                key={recipeId}
                recipeId={recipeId}
                name={name}
                description={description}
                totalTime={totalTime}
                makingAmount={makingAmount}
                ref={lastItem}
              />
            )
          } else {
            return (
              <RecipesItem
                key={recipeId}
                recipeId={recipeId}
                name={name}
                description={description}
                totalTime={totalTime}
                makingAmount={makingAmount}
              />
            )
          }
        }
      )}
    </List>
  )
}

export default RecipesList
