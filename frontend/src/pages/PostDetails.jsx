import { useLocation, useParams } from "react-router-dom";
import Comments from "../components/Comments";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { URL } from "./../url";
import { UserContext } from "../context/UserContext";
import Loader from "../components/Loader";

const PostDetails = () => {
  const [post, setPost] = useState({});
  const [loader, setLoader] = useState(false);
  const postId = useParams().id;
  const { user } = useContext(UserContext);
  console.log(postId);

  useEffect(() => {
    const fetchPost = async () => {
      setLoader(true);
      try {
        const res = await axios.get(URL + "/api/posts/" + postId);
        console.log(res);
        setPost(res.data);
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(true);
      }
    };
    fetchPost();
  }, [postId]);

  return (
    <div>
      <Navbar />
      {loader ? (
        <div className="h-[40vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="px-8 md:px-[200px] mt-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-black">
              {post.title}
            </h1>
            {user?._id === post?.userId && (
              <div className="flex justify-center items-center space-x-2">
                <p>
                  <BiEdit />
                </p>
                <p>
                  <MdDelete />
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center mt-2 md:mt-4 ">
            <p>@{post.username}</p>
            <div className="flex space-x-2 text-sm">
              <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
              <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
            </div>
          </div>
          <img src={post.photo} alt="" className="w-full mx-auto mt-8" />
          <p className="mt-8 mx-auto">{post.description}</p>

          {/* Categories */}
          <div className="flex items-center mt-8 font-semibold space-x-4">
            <p>Categories:</p>
            <div className="flex justify-center items-center space-x-2">
              {post.categories?.map((category, index) => {
                return (
                  <div key={index} className="py-1 px-3 rounded-lg bg-gray-400">
                    {category}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Comments */}
          <div className="flex flex-col mt-4">
            <h3 className=" font-semibold mt-6 mb-4"> Comments: </h3>
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />

            {/* Write a comment */}
            <div className="flex flex-col mt-4 md:flex-row w-full">
              <input
                placeholder="Write a comment"
                type="text"
                className="md:w-[80%] outline-none px-4 mt-4 md:mt-0"
              />
              <button className="bg-black text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0 rounded-lg hover:bg-blue-600">
                Add Comment
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PostDetails;
