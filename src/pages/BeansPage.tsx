import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader } from "../components/Loader/Loader";
import { BeanCard } from "../types/types";
import {
  Card,
  CardImage,
  CardList,
  ErrorMessage,
  Section,
  Button,
} from "./Home.styled";

const BeansPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();
  const [bean, setBean] = useState<BeanCard | null>(null);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
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
        toast.error("Error! Try again or return to home page");
        console.log(err);
        setLoading(false);
        setError("Error! Try again or return to home page");
      }
    };
    fetchBean();
  }, [id]);

  return (
    <Section>
      <Button onClick={() => handleBackClick()}>Back</Button>
      <Card>
        {loading && <Loader />}
        {!loading && error && (
          <ErrorMessage>
            Something went wrong, please reload the page...
          </ErrorMessage>
        )}
        <p>{bean?.flavorName}</p>
        <CardImage src={bean?.imageUrl} alt="bean" width={200} />
        <p>{bean?.description}</p>
        <p>Name group: {bean?.groupName.join(", ")}</p>
        <p>Ingredients: {bean?.ingredients.join(", ")}</p>
        <CardList>
          <li>
            <p>Color group:</p>
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
            <p>Kosher:</p>
            <p>{bean?.kosher ? "Yes" : "No"}</p>
          </li>
          <li>
            <p>Seasonal:</p>
            <p>{bean?.seasonal ? "Yes" : "No"}</p>
          </li>
          <li>
            <p>Gluten free:</p>
            <p>{bean?.glutenFree ? "Yes" : "No"}</p>
          </li>
          <li>
            <p>Sugar free:</p>
            <p>{bean?.sugarFree ? "Yes" : "No"}</p>
          </li>
        </CardList>
      </Card>
    </Section>
  );
};

export default BeansPage;
