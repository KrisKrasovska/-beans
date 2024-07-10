import { FC, RefObject } from 'react'
import { FactsType } from '../../types/types'
import FactsItem from './FactsItem'
import { List } from '../BeansList/BeansList.styled'

type PropsFactsList = {
  factsList: FactsType[]
  lastItem: RefObject<HTMLLIElement>
}

const FactsList: FC<PropsFactsList> = ({ factsList, lastItem }) => {
  return (
    <List>
      {factsList.map(({ factId, title, description }, index) => {
        if (index + 1 === factsList.length) {
          return (
            <FactsItem
              key={factId}
              id={factId}
              title={title}
              description={description}
              ref={lastItem}
            />
          )
        } else {
          return (
            <FactsItem
              key={factId}
              id={factId}
              title={title}
              description={description}
            />
          )
        }
      })}
    </List>
  )
}

export default FactsList
