import { FC, RefObject } from "react";
import { CombinationType } from "../../types/types";
import { List } from "../BeansList/BeansList.styled";
import CombinationsItem from "./CombinationsItem";

type PropsCombinationsList = {
  combinationsList: CombinationType[];
  lastItem: RefObject<HTMLLIElement>;
};

const CombinationsList: FC<PropsCombinationsList> = ({
  combinationsList,
  lastItem,
}) => {
  return (
    <List>
      {combinationsList.map(({ combinationId, name, tag }, index) => {
        if (index + 1 === combinationsList.length) {
          return (
            <CombinationsItem
              key={combinationId}
              id={combinationId}
              name={name}
              tag={tag}
              ref={lastItem}
            />
          );
        } else {
          return (
            <CombinationsItem
              key={combinationId}
              id={combinationId}
              name={name}
              tag={tag}
            />
          );
        }
      })}
    </List>
  );
};

export default CombinationsList;
