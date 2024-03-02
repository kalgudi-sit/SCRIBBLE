import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
const Navbar = () => {
  const user = null;
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="font-bold text-lg md:text-xl hover:text-teal-500 transition duration-300 ease-in-out">
        <Link to="/">SCRIBBLE</Link>
      </h1>
      <div className="flex justify-center items-center space-x-0">
        <p>
          <GoSearch />
        </p>
        <input className="outline-none px-3" placeholder="Search a post" />
      </div>
      <div className="flex items-center justify-center space-x-2 md:space-x-5">
        {user ? (
          <h3 className="hover:text-blue-600">
            <Link to="/write">Write</Link>
          </h3>
        ) : (
          <h3 className="hover:text-blue-600">
            <Link to="/login">Login</Link>
          </h3>
        )}
        {user ? (
          <h3 className="hover:text-blue-600">
            <Link to="/profile">Profile</Link>
          </h3>
        ) : (
          <h3 className="hover:text-blue-600">
            <Link to="/register">Register</Link>
          </h3>
        )}
      </div>
    </div>
  );
};

export default Navbar;
