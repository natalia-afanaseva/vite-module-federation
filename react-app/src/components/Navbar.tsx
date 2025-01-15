import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );
};

export default Navbar;
