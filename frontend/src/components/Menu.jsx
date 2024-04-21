import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios";
import { URL } from './../url';

const Menu = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const res = await axios(URL + "/api/auth/logout", { withCredentials: true });
      // console.log(res);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="bg-slate-300 w-[200px] flex flex-col items-start absolute top-12 p-3 right-4 rounded-md space-y-4 md:right-14">
      {!user && <h3 className="text-gray-500 text-lg hover:text-black hover:cursor-pointer">Login</h3>}
      {!user && <h3 className="text-gray-500 text-lg hover:text-black hover:cursor-pointer">Register</h3>}
      {user && <h3 className="text-gray-500 text-lg hover:text-black hover:cursor-pointer">Profile</h3>}
      {user && <h3 className="text-gray-500 text-lg hover:text-black hover:cursor-pointer">Write</h3>}
      {user && <h3 className="text-gray-500 text-lg hover:text-black hover:cursor-pointer">My Blogs</h3>}
      {user && <h3 onClick={handleLogout} className="text-gray-500 text-lg hover:text-black hover:cursor-pointer">Logout</h3>}
    </div>
  )
}

export default Menu;