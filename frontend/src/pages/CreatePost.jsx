import { useContext, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MdOutlineCancel } from "react-icons/md";
import { UserContext } from "../context/UserContext";
import { URL } from "./../url";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [categoryField, setCategoryField] = useState("");
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();


  const addCategory = (e) => {
    e.preventDefault();
    if (categoryField == "") {
      return;
    }
    let updatedAddCategories = [...categories];
    updatedAddCategories.push(categoryField);
    setCategoryField("");
    setCategories(updatedAddCategories);
  };

  const deleteCategory = (e, index) => {
    e.preventDefault();
    let updatedDeleteCategories = [...categories];
    updatedDeleteCategories.splice(index, 1);
    setCategories(updatedDeleteCategories);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const post = {
      title,
      description,
      username: user.username,
      userId: user._id,
      categories: categories,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file?.name;
      data.append("img", filename);
      data.append("file", file);
      post.photo = filename;
      
      // image upload
      try {
        const imageUpload = await axios.post(URL + "/api/upload", data);
        console.log(imageUpload.data);
      } catch (error) {
        console.log(error);
      }

      // post upload
      try {
        const res = await axios.post(URL + "/api/posts/create", post, { withCredentials: true });
        console.log(res);
        navigate("/posts/post/" + res.data._id);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px]">
        <h1 className="font-bold md:text-2xl text-xl mt-8">Create a Post</h1>
        <form className="w-full flex flex-col space-y-4 md:space-8 mt-4">
          <input
            type="text"
            placeholder="Post title"
            className="px-4 py-2 outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            className="px-4"
          />

          {/* Categories */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                type="text"
                placeholder="Enter post category"
                className="px-4 py-2 outline-none"
                value={categoryField}
                onChange={(e) => setCategoryField(e.target.value)}
              />
              <button
                onClick={addCategory}
                className="bg-black text-white px-4 py-2 font-semibold cursor-pointer rounded-lg hover:bg-blue-600"
              >
                Add
              </button>
            </div>

            {/* Example Categories */}
            <div className="flex mt-3 px-4">
              {categories?.map((category, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-center space-x-2 mr-4 bg-gray-400 px-2 py-1 rounded-lg"
                  >
                    <p>{category}</p>
                    <p
                      onClick={(e) => deleteCategory(e, index)}
                      className="text-white bg-black rounded-full cursor-pointer text-xxs m-0"
                    >
                      <MdOutlineCancel />
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <textarea
            rows={15}
            cols={30}
            className="px-4 py-2 outline-none"
            placeholder="Enter post descriptionription"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            onClick={handleCreate}
            className=" rounded-lg w-full bg-black md:w-[20%] mx-auto text-white font-semibold px-4 py-2 text-lg md:text-xl hover:bg-blue-600"
          >
            Create
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
