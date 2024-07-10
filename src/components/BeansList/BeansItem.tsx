import { FC } from 'react'
import { Item, BeansText, BeansImg, BeansTitle } from './BeansList.styled'

type PropsBeansItem = {
  beanId: string
  flavorName: string
  imageUrl: string
  description: string
}

const BeansItem: FC<PropsBeansItem> = ({
  beanId,
  flavorName,
  imageUrl,
  description,
}) => {
  return (
    <Item>
      <BeansTitle to={`/beans/${beanId}`}>{flavorName}</BeansTitle>
      <BeansImg src={imageUrl} alt='beans' width={150} />
      <BeansText>{description}</BeansText>
    </Item>
  )
}

export default BeansItem
