import { ForwardedRef, forwardRef } from "react";
import { CardText, CardTitle, Item } from "../BeansList/BeansList.styled";
import { Link } from "react-router-dom";

type PropsRecipesItem = {
	recipeId: number;
	name: string;
	description: string;
	totalTime: string;
	makingAmount: string;
};

const RecipesItem = forwardRef<HTMLLIElement, PropsRecipesItem>(
  ({ recipeId, name, description,totalTime,makingAmount, ...props }, ref: ForwardedRef<HTMLLIElement>) => {
    return (
      <Item ref={ref}>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
		  <CardText>{makingAmount}</CardText>
		  <CardText>{totalTime}</CardText>
		  <Link to={`/recipes/:id`}>Посмотреть подробнее</Link>
      </Item>
    );
  }
);

export default RecipesItem;
