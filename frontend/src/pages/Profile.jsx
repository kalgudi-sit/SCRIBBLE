import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfilePost from "../components/ProfilePost";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse space-x-36 ">
        <div className="flex flex-col md:w-[70%] w-full">
          <h1 className="font-bold text-xl mb-4">Your Posts</h1>
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
        </div>
        <div className="flex flex-col md:w-[30%] space-y-4 w-full mb-6 justify-start ">
          <div className="flex flex-col space-y-4 items-start md:top-10 sticky md:border-2 md:border-purple-800 md:rounded-lg md:px-8 md:py-10">
            <h1 className="font-bold text-xl mb-4">Profile</h1>
            <input
              type="text"
              placeholder="Your Username"
              className="outline-none px-4 py-2 text-gray-500 w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="outline-none px-4 py-2 text-gray-500 w-full"
            />
            <input
              type="password"
              placeholder="Your Password"
              className="outline-none px-4 py-2 text-gray-500 w-full"
            />
            <div className="flex items-center space-x-4 mt-8 w-full">
              <button className="text-white font-semibold bg-black px-4 py-2 hover:bg-blue-600 rounded-lg">
                Update
              </button>
              <button className="text-white font-semibold bg-black px-4 py-2 hover:bg-blue-600 rounded-lg">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
