import {Link, NavLink} from "react-router";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/jobs">Jobs</Link>
      <Link to="/about">Home</Link>
      <button className="btn btn-success">Success</button>
      <NavLink
        to="/"
        className={({isActive}) => (isActive ? "text-blue-500" : "")}
      >
        Home
      </NavLink>
    </div>
  );
};

export default Navbar;
