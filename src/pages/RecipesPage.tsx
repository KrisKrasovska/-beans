// import { useState } from "react";
import { useParams } from "react-router-dom";

const RecipesPage = () => {
	// const [loading, setLoading] = useState<boolean>(false);
	// const [error, setError] = useState<string | null>(null);
	const { id } = useParams();
	// const [bean, setBean] = useState<BeanCard | null>(null);
	// const navigate = useNavigate();
 
	// const handleBackClick = () => {
	//   navigate(-1); // Возвращает на предыдущую страницу
	// };
	return <div>{id}</div>
}

export default RecipesPage;