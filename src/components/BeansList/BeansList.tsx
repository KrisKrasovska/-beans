import { FC } from 'react'
import { BeanType } from '../../types/types'
import BeansItem from './BeansItem'
import { List } from './BeansList.styled'

type PropsBeansList = {
  beansList: BeanType[]
}

const BeansList: FC<PropsBeansList> = ({ beansList }) => {
  return (
    <List>
      {beansList.map(({ beanId, flavorName, imageUrl, description }) => (
        <BeansItem
          key={beanId}
          beanId={beanId}
          flavorName={flavorName}
          imageUrl={imageUrl}
          description={description}
        />
      ))}
    </List>
  )
}

export default BeansList
