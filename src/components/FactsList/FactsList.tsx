import { FC } from 'react'
import { FactsType } from '../../types/types'
import FactsItem from './FactsItem'
import { List } from '../BeansList/BeansList.styled'

type PropsFactsList = {
  factsList: FactsType[]
}

const FactsList: FC<PropsFactsList> = ({ factsList }) => {
  return (
    <List>
      {factsList.map(({ factId, title, description }) => (
        <FactsItem key={factId} title={title} description={description} />
      ))}
    </List>
  )
}

export default FactsList
