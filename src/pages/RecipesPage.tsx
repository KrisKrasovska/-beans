import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RecipeType } from "../types/types";
import {
  BottomContent,
  Button,
  Card,
  CardImage,
  ErrorMessage,
  Section,
} from "./Home.styled";
import { toast } from "react-toastify";
import axios from "axios";
import { Loader } from "../components/Loader/Loader";
import { CardText } from "../components/BeansList/BeansList.styled";

const RecipesPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();
  const [recipes, setRecipes] = useState<RecipeType | null>(null);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      try {
        const searchRecipe = await axios.get(
          `https://jellybellywikiapi.onrender.com/api/recipes/${id}`
        );
        setRecipes(searchRecipe.data);
        setLoading(false);
      } catch (err) {
        toast.error("Error! Try again or return to home page");
        console.log(err);
        setLoading(false);
        setError("Error! Try again or return to home page");
      }
    };
    fetchRecipe();
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
        <CardText>{recipes?.name}</CardText>
        <CardText>{recipes?.description}</CardText>
        <CardImage src={recipes?.imageUrl} alt="recipe" width={200} />
        <BottomContent>
          <CardText>
            Preparation time:
            {recipes?.prepTime === "" ? " no data" : ` ${recipes?.prepTime}`}
          </CardText>
          <CardText>
            Cook time:
            {recipes?.cookTime === "" ? " no data" : ` ${recipes?.cookTime}`}
          </CardText>
          <CardText>
            Total time:
            {recipes?.totalTime === "" ? " no data" : ` ${recipes?.totalTime}`}
          </CardText>
          <CardText>
            Recipe makes
            {recipes?.makingAmount === "" ? " no data" : ` ${recipes?.makingAmount}`}
          </CardText>
          <CardText>Ingredients:</CardText>
          <ul>
            {recipes?.ingredients.map((item, index) => (
              <li key={index}>
                <CardText>{item}</CardText>
              </li>
            ))}
          </ul>
          {recipes?.additions1 && recipes?.additions1.length > 0 && (
            <ul>
              {recipes?.additions1.map((item, index) => (
                <li key={index}>
                  <CardText>{item}</CardText>
                </li>
              ))}
            </ul>
          )}
          {recipes?.additions2 && recipes?.additions2.length > 0 && (
            <ul>
              {recipes?.additions2.map((item) => (
                <li>
                  <CardText>{item}</CardText>
                </li>
              ))}
            </ul>
          )}
          {recipes?.additions3 && recipes?.additions3.length > 0 && (
            <ul>
              {recipes?.additions3.map((item) => (
                <li>
                  <CardText>{item}</CardText>
                </li>
              ))}
            </ul>
          )}
          <CardText>Directions: {recipes?.directions}</CardText>
        </BottomContent>
      </Card>
    </Section>
  );
};

export default RecipesPage;
