import Wrapper from '../assets/wrappers/CocktailList';
import CocktailCard from '../components/CocktailCard';

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h4>No results found</h4>;
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      img: strDrinkThumb,
      alcoholic: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <Wrapper>
      {formattedDrinks.map((e) => {
        return <CocktailCard key={e.id} {...e} />;
      })}
    </Wrapper>
  );
};
export default CocktailList;
