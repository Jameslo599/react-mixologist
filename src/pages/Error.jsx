import Wrapper from '../assets/wrappers/ErrorPage';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/not-found.svg';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt={error.status} />
        </div>

        <h3>Uh-oh!</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to={'/'}>Back Home</Link>
      </Wrapper>
    );
  } else
    return (
      <Wrapper>
        <div>
          <img />
        </div>

        <h3>Uh-oh!</h3>
        <p>Something went wrong!</p>
        <Link to={'/'}>Back Home</Link>
      </Wrapper>
    );
};
export default Error;
