import axios from 'axios';
import { useLoaderData, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailPage';
const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
import { useQuery } from '@tanstack/react-query';

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(singleCocktailQuery(id));
  if (!data) return <Navigate to="/react-mixologist/" />;

  const singleDrink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: img,
    strAlcoholic: alcoholic,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const ingredients = [];
  for (const [key, value] of Object.entries(singleDrink)) {
    if (key.includes('strIngredient') && value) {
      ingredients.push(value);
    }
  }

  return (
    <Wrapper>
      <header>
        <Link to="/react-mixologist/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={img} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">alcoholic :</span>
            {alcoholic}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients.map((e, i) => {
              return (
                <span className="ing" key={e}>
                  {e + (i === ingredients.length - 1 ? '.' : ', ')}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Cocktail;
