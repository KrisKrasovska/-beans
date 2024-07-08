import { FC, RefObject } from "react";
import { BeanType } from "../../types/types";
import BeansItem from "./BeansItem";
import { List } from "./BeansList.styled";

type PropsBeansList = {
  beansList: BeanType[];
  lastItem: RefObject<HTMLLIElement>
};

const BeansList: FC<PropsBeansList> = ({ beansList, lastItem }) => {
  return (
    <List>
      {beansList.map(({ beanId, flavorName, imageUrl, description }, index) => {
        if (index + 1 === beansList.length) {
          return (
            <BeansItem
              key={beanId}
              flavorName={flavorName}
              imageUrl={imageUrl}
              description={description}
              ref={lastItem}
            />
          );
        } else {
          return (
            <BeansItem
              key={beanId}
              flavorName={flavorName}
              imageUrl={imageUrl}
              description={description}
            />
          );
        }
      })}
    </List>
  );
};

export default BeansList;
