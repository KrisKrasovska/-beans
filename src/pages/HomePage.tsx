import { useEffect, useRef, useState } from "react";
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
  const observer = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const fetchBeans = async () => {
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
        setBeansList((prevBeansList) => [...prevBeansList, ...normalizedData]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Ошибка");
        setLoading(false);
      }
    };
    fetchBeans();
  }, [pageIndex]);

  useEffect(() => {
    if (loading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageIndex((prevPageIndex) => prevPageIndex + 1);
      }
    });

    if (loadMoreRef.current) {
      observer.current.observe(loadMoreRef.current);
    }
  }, [loading]);
  return (
    <Section>
      <Title>Все о фасоли</Title>
      {beansList.length > 0 && !loading && !error && (
        <BeansList beansList={beansList} />
      )}
      {loading && !error && <Loader />}
      {!loading && error && (
        <ErrorMessage>
          Что-то пошло не так, перезагрузите страницу...
        </ErrorMessage>
      )}
      <div ref={loadMoreRef} />
    </Section>
  );
};

export default HomePage;
