import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { FaBars } from "react-icons/fa6";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [prompt, setPrompt] = useState("");
  const [menu, setMenu] = useState(false);
  const { user } = useContext(UserContext);
  const path = useLocation().pathname;
  const navigate = useNavigate();
  // console.log(path);

  const toggleMenu = () => {
    // console.log(user);
    setMenu(!menu);
  };

  const searchHandler = () => {
    navigate(prompt ? "?search=" + prompt : "/");
    // This will be passed in the url
    // The home page will recieve it using useLocation() hook
    // It will then perform search query from the recieved prompt
    setPrompt("");
  };

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4 ">
      <h1 className="font-bold text-lg md:text-xl hover:text-teal-500 transition duration-300 ease-in-out">
        <Link to="/">SCRIBBLE</Link>
      </h1>
      {path==="/" && <div className="flex justify-center items-center space-x-0">
        <p
          onClick={searchHandler}
          className="cursor-pointer hover:rounded-full hover:bg-green-400  p-2 hover:text-white"
        >
          <GoSearch />
        </p>
        <input
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          className="outline-none px-3"
          placeholder="Search a post"
        />
      </div>}
      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-5">
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
          <h3 onClick={toggleMenu} className="hover:text-blue-600">
            <div>
              <p>
                <FaBars />
              </p>
              {menu && <Menu />}
            </div>
          </h3>
        ) : (
          <h3 className="hover:text-blue-600">
            <Link to="/register">Register</Link>
          </h3>
        )}
      </div>
      <div
        onClick={toggleMenu}
        className="md:hidden text-xl hover:cursor-pointer"
      >
        <p>
          <FaBars />
        </p>
        {menu && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
