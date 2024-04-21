import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import HomePost from "../components/HomePost";
import Navbar from "../components/Navbar";
import axios from "axios";
import { URL } from "./../url";
import { Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);
  const { search } = useLocation();
  const { user } = useContext(UserContext);
  // console.log(search);
  // console.log(user);

  useEffect(() => {
    setLoader(true);
    const fetchPosts = async () => {
      try {
        const res = await axios.get(URL + "/api/posts" + search);
        // search query extracted from url, made to hit necessary api endpoint
        // console.log(res);
        setPosts(res.data);
        res.data.length === 0 ? setNoResults(true) : setNoResults(false);
        setLoader(false);
      } catch (error) {
        setLoader(true);
        console.log(error);
      }
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Navbar />
      <div className=" px-8 md:px-[200px] min-h-[80vh]">
        {loader ? (
          <div className="h-[40vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : !noResults ? (
          posts.map((post) => {
            return (
              <>
                <Link to={user ? `/posts/post/${post._id}` : "/login"}>
                  <HomePost key={post._id} post={post} />
                </Link>
              </>
            );
          })
        ) : (
          <h3 className="text-center mt-16 font-bold">No posts available</h3>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
