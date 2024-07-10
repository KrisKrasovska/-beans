import { FC } from 'react'
import { MileStone } from '../../types/types'
import { List } from '../BeansList/BeansList.styled'
import FactsItem from '../FactsList/FactsItem'

type PropsHistoryList = {
  historyList: MileStone[]
}

const HistoryList: FC<PropsHistoryList> = ({ historyList }) => {
  return (
    <List>
      {historyList.map(({ mileStoneId, year, description }) => (
        <FactsItem key={mileStoneId} title={year} description={description} />
      ))}
    </List>
  )
}

export default HistoryList
