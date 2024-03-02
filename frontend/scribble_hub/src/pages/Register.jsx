import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Register = () => {
  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="font-bold text-lg md:text-xl hover:text-teal-500 transition duration-300 ease-in-out">
          <Link to="/">SCRIBBLE</Link>
        </h1>
        <h3 className="hover:text-blue-600">
          <Link to="/login">Login</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh]">
        <div className="flex flex-col justify-center items-center space-y-7 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Create account</h1>
          <input
            className="w-full px-4 py-2 border-2 border-black outline-0 rounded-lg"
            type="text"
            placeholder="Username"
          />
          <input
            className="w-full px-4 py-2 border-2 border-black outline-0 rounded-lg"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full px-4 py-2 border-2 border-black outline-0 rounded-lg"
            type="password"
            placeholder="Password"
          />
          <button className="w-full text-lg px-4 py-4 font-bold text-white bg-black rounded-lg hover:bg-blue-600">
            Register
          </button>
          <div className="flex justify-center items-center space-x-2">
            <h1>Already have an account?</h1>
            <Link to="/login" className=" text-blue-600">
              Login
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
