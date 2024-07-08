import { FC } from "react";
import { Item, BeansTitle, BeansText, BeansImg } from "./BeansList.styled";

type PropsBeansItem = {
  flavorName: string;
  imageUrl: string;
  description: string;
};

const BeansItem: FC<PropsBeansItem> = ({
  flavorName,
  imageUrl,
  description,
}) => {
  return (
    <Item>
      <BeansTitle>{flavorName}</BeansTitle>
      <BeansImg src={imageUrl} alt="beans" width={150} />
      <BeansText>{description}</BeansText>
    </Item>
  );
};

export default BeansItem;
