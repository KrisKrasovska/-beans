import { FC, RefObject } from "react";
import { MileStone } from "../../types/types";
import { List } from "../BeansList/BeansList.styled";
import FactsItem from "../FactsList/FactsItem";

type PropsHistoryList = {
  historyList: MileStone[];
  lastItem: RefObject<HTMLLIElement>;
};

const HistoryList: FC<PropsHistoryList> = ({ historyList, lastItem }) => {
  return (
    <List>
      {historyList.map(({ mileStoneId, year, description }, index) => {
        if (index + 1 === historyList.length) {
          return (
            <FactsItem
              key={mileStoneId}
              id={mileStoneId}
              title={year}
              description={description}
              ref={lastItem}
            />
          );
        } else {
          return (
            <FactsItem
              key={mileStoneId}
              id={mileStoneId}
              title={year}
              description={description}
            />
          );
        }
      })}
    </List>
  );
};

export default HistoryList;
