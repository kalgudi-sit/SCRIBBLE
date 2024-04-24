import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios";
import { URL } from './../url';
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios(URL + "/api/auth/logout", { withCredentials: true });
      // console.log(res);
      setUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="bg-slate-300 w-[200px] flex flex-col items-start absolute top-12 p-3 right-4 rounded-md space-y-4 md:right-14 z-10">
      {!user && <h3 className="text-gray-500 text-lg hover:text-black hover:cursor-pointer"><Link to="/login">Login</Link></h3>}
      {!user && <h3 className="text-gray-500 text-lg hover:text-black hover:cursor-pointer"><Link to="/register">Register</Link></h3>}
      {user && <h3 className="text-gray-500 text-lg hover:text-black hover:cursor-pointer"><Link to={`/profile/${user._id}`}>Profile</Link></h3>}
      {user && <h3 className="text-gray-500 text-lg hover:text-black hover:cursor-pointer"><Link to="/write">Write</Link></h3>}
      {user && <h3 className="text-gray-500 text-lg hover:text-black hover:cursor-pointer"><Link to={`/myblogs/${user._id}`}>My Blogs</Link></h3>}
      {user && <h3 onClick={handleLogout} className="text-gray-500 text-lg hover:text-black hover:cursor-pointer">Logout</h3>}
    </div>
  )
}

export default Menu;