import { createRef, RefObject, useEffect, useRef, useState } from "react";
import { MileStone } from "../types/types";
import { ErrorMessage, Section, Title } from "./Home.styled";
import axios from "axios";
import { Loader } from "../components/Loader/Loader";
import HistoryList from "../components/HistoryList/HistoryList";

const History = () => {
  const [historyList, setHistoryList] = useState<MileStone[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const lastItem: RefObject<HTMLLIElement> = createRef();
  const observer = useRef<IntersectionObserver | null>(null);
  const [totalCounts, setTotalCounts] = useState<number>(10);

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      try {
        const results = await axios.get(
          `https://jellybellywikiapi.onrender.com/api/mileStones?pageIndex=${pageIndex}&pageSize=10`
        );
        const { data } = results;

        setHistoryList((prevHistoryList) => {
          const newHistoryList = data.items.filter(
            (newItem: MileStone) =>
              !prevHistoryList.some(
                (prevItem) => prevItem.mileStoneId === newItem.mileStoneId
              )
          );
          return [...prevHistoryList, ...newHistoryList];
        });
        setTotalCounts(data.totalCount);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Ошибка");
        setLoading(false);
      }
    };
    if (pageIndex <= totalCounts / 10) fetchHistory();
  }, [pageIndex, totalCounts]);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (pageIndex < totalCounts / 10)
          setPageIndex((prevPage) => prevPage + 1);
      }
    });

    if (lastItem.current) {
      observer.current.observe(lastItem.current);
    }
  }, [lastItem, totalCounts, pageIndex]);

  return (
    <Section>
      <Title>История</Title>
      {historyList.length > 0 && !loading && !error && (
        <HistoryList lastItem={lastItem} historyList={historyList} />
      )}

      {!loading && error && (
        <ErrorMessage>
          Что-то пошло не так, перезагрузите страницу...
        </ErrorMessage>
      )}
      {loading && <Loader />}
    </Section>
  );
};

export default History;
