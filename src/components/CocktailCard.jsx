import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailCard';

const CocktailCard = ({ id, name, img, alcoholic, glass }) => {
  return (
    <Wrapper>
      <img src={img} alt={name} className="img" />
      <div className="footer">
        <h4>{name}</h4>
        <h5>{alcoholic}</h5>
        <p>{glass}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          Details
        </Link>
      </div>
    </Wrapper>
  );
};
export default CocktailCard;
