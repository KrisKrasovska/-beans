import { createRef, RefObject, useEffect, useRef, useState } from "react";
import { ErrorMessage, Section, Title } from "./Home.styled";
import axios from "axios";
import { Loader } from "../components/Loader/Loader";
import { BeanType } from "../types/types";
import BeansList from "../components/BeansList/BeansList";

const HomePage = () => {
  const [beansList, setBeansList] = useState<BeanType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const lastItem: RefObject<HTMLLIElement> = createRef();
  const observer = useRef<IntersectionObserver | null>(null);
  const [totalCounts, setTotalCounts] = useState<number>(1);

  useEffect(() => {
    const fetchInitialBeans = async () => {
      setLoading(true);
      try {
        const results = await axios.get(
          `https://jellybellywikiapi.onrender.com/api/beans?pageIndex=${pageIndex}&pageSize=10`
        );
        const { data } = results;
        const normalizedData: BeanType[] = data.items.map(
          ({ beanId, flavorName, imageUrl, description }: BeanType) => ({
            beanId,
            flavorName,
            imageUrl,
            description,
          })
        );
        setBeansList((prevBeansList) => {
          const newBeansList = normalizedData.filter(
            (newItem) =>
              !prevBeansList.some(
                (prevItem) => prevItem.beanId === newItem.beanId
              )
          );
          return [...prevBeansList, ...newBeansList];
        });
        setTotalCounts(data.totalCount);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Ошибка");
        setLoading(false);
      }
    };
    if (beansList.length <= totalCounts) fetchInitialBeans();
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
      <Title>Все о фасоли</Title>
      {beansList.length > 0 && !loading && !error && (
        <BeansList lastItem={lastItem} beansList={beansList} />
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

export default HomePage;
