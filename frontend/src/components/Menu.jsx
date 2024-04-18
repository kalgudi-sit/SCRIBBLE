import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Menu = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-slate-300 w-[200px] flex flex-col items-start absolute top-12 p-3 right-4 rounded-md space-y-4 md:right-14">
      {!user && <h3 className="text-gray-500 text-lg hover:text-black hover:cursor-pointer">Login</h3>}
      {!user && <h3 className="text-gray-500 text-lg hover:text-black hover:cursor-pointer">Register</h3>}
      {user && <h3 className="text-gray-500 text-lg hover:text-black hover:cursor-pointer">Profile</h3>}
      {user && <h3 className="text-gray-500 text-lg hover:text-black hover:cursor-pointer">Write</h3>}
      {user && <h3 className="text-gray-500 text-lg hover:text-black hover:cursor-pointer">My Blogs</h3>}
      {user && <h3 className="text-gray-500 text-lg hover:text-black hover:cursor-pointer">Logout</h3>}
    </div>
  )
}

export default Menu;