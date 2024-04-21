import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import axios from "axios";
import { URL } from './../url';
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/login", { email, password }, { withCredentials: true });
      // console.log(res);
      setUser(res.data);
      navigate("/");
    } catch (error) {
      setError(true);
    }
  }

  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="font-bold text-lg md:text-xl hover:text-teal-500 transition duration-300 ease-in-out">
          <Link to="/">SCRIBBLE</Link>
        </h1>
        <h3 className="hover:text-blue-600">
          <Link to="/register">Register</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh]">
        <div className="flex flex-col justify-center items-center space-y-7 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Log into your account</h1>
          <input
            className="w-full px-4 py-2 border-2 border-black outline-0 rounded-lg"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full px-4 py-2 border-2 border-black outline-0 rounded-lg"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className="w-full text-lg px-4 py-4 font-bold text-white bg-black rounded-lg hover:bg-blue-600">
            Login
          </button>
          {error && <h3 className="text-red-500">Invalid Credentials</h3>}
          <div className="flex justify-center items-center space-x-2">
            <h1>New Here?</h1>
            <Link to="/register" className=" text-blue-600">
              Register
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
