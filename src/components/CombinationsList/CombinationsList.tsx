import { FC } from 'react'
import { CombinationType } from '../../types/types'
import { List } from '../BeansList/BeansList.styled'
import CombinationsItem from './CombinationsItem'

type PropsCombinationsList = {
  combinationsList: CombinationType[]
}

const CombinationsList: FC<PropsCombinationsList> = ({ combinationsList }) => {
  return (
    <List>
      {combinationsList.map(({ combinationId, name, tag }) => (
        <CombinationsItem key={combinationId} name={name} tag={tag} />
      ))}
    </List>
  )
}

export default CombinationsList
