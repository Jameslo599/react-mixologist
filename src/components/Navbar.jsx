import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Navbar';

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <NavLink to="/react-mixologist/" className="logo">
          MixMaster
        </NavLink>
        <div className="nav-links">
          <NavLink to="/react-mixologist/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/react-mixologist/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/react-mixologist/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
