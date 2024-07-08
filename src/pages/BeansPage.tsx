import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader } from "../components/Loader/Loader";
import { BeanCard } from "../types/types";
import { Card, CardImage, CardList, ErrorMessage, Section, Button } from "./Home.styled";

const BeansPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();
  const [bean, setBean] = useState<BeanCard | null>(null);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Возвращает на предыдущую страницу
  };

  useEffect(() => {
    const fetchBean = async () => {
      setLoading(true);
      try {
        const searchBean = await axios.get(
          `https://jellybellywikiapi.onrender.com/api/beans/${id}`
        );
        setBean(searchBean.data);
        setLoading(false);
      } catch (err) {
        toast.error("Error! Try again or go to Home page");
        console.log(err);
        setLoading(false);
        setError("Ошибка");
      }
    };
    fetchBean();
  }, [id]);

  return (
	<Section>
		<Button onClick={()=> handleBackClick()}>Назад</Button>
    <Card>
      {loading && <Loader />}
      {!loading && error && (
        <ErrorMessage>
          Что-то пошло не так, перезагрузите страницу...
        </ErrorMessage>
      )}
      <p>{bean?.flavorName}</p>
		<CardImage src={bean?.imageUrl} alt="bean" width={200} />
      <p>{bean?.description}</p>
      <p>Имя группы: {bean?.groupName.join(", ")}</p>
      <p>Ингредиенты: {bean?.ingredients.join(", ")}</p>
      <CardList>
        <li>
          <p>Группа цвета:</p>
          <p>{bean?.colorGroup}</p>
        </li>
		  <li>
          <p>Hexadecimal Color:</p>
          <p>{bean?.backgroundColor}</p>
        </li>
		  <li>
          <p>ID:</p>
          <p>{bean?.beanId}</p>
        </li>
		  <li>
		  <p>Кошерный:</p>
          <p>{bean?.kosher ? "Да" : "Нет"}</p>
        </li>
		  <li>
		  <p>Сезонный:</p>
          <p>{bean?.seasonal ? "Да" : "Нет"}</p>
        </li>
		  <li>
		  <p>Глютен:</p>
          <p>{bean?.glutenFree ? "Да" : "Нет"}</p>
        </li>
		  <li>
		  <p>Сахар:</p>
          <p>{bean?.sugarFree ? "Да" : "Нет"}</p>
        </li>
      </CardList>
    </Card>
	 </Section>
  );
};

export default BeansPage;
