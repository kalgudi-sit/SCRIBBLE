import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-black">
            Example Title
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2 md:mt-4 ">
          <p>@USERNAME</p>
          <div className="flex space-x-2 text-sm">
            <p>12/04/23</p>
            <p>16:45</p>
          </div>
        </div>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="w-full mx-auto mt-8"
        />
        <p className="mt-8 mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
          eveniet quaerat iure reiciendis esse explicabo quasi nihil atque vero
          quae natus id. Nisi maiores et qui quasi, expedita, facilis error,
          rerum repudiandae magni quas eum. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Excepturi, eveniet quaerat iure
          reiciendis esse explicabo quasi nihil atque vero quae natus id. Nisi
          maiores et qui quasi, expedita, facilis error, rerum repudiandae magni
          quas eum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Excepturi, eveniet quaerat iure reiciendis esse explicabo quasi nihil
          atque vero quae natus id. Nisi maiores et qui quasi, expedita, facilis
          error, rerum repudiandae magni quas eum. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Excepturi, eveniet quaerat iure
          reiciendis esse explicabo quasi nihil atque vero quae natus id. Nisi
          maiores et qui quasi, expedita, facilis error, rerum repudiandae magni
          quas eum.
        </p>

        {/* Categories */}
        <div className="flex items-center mt-8 font-semibold space-x-4">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="py-1 px-3 rounded-lg bg-gray-400"> Tech</div>
            <div className="py-1 px-3 rounded-lg bg-gray-400"> Science</div>
            <div className="py-1 px-3 rounded-lg bg-gray-400"> Python</div>
            <div className="py-1 px-3 rounded-lg bg-gray-400"> Big Data</div>
          </div>
        </div>

        {/* Comments */}
        <div className="flex flex-col mt-4">
          <h3 className=" font-semibold mt-6 mb-4"> Comments: </h3>
          {/* Example comment */}
          <div className="px-2 py-2 rounded-lg bg-gray-300 my-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-black ">@AbhishekKalgudi</h3>
              <div className="flex items-center space-x-4 justify-center">
                <p className="text-grey-500 text-sm"> 19/06/23</p>
                <p className="text-grey-500 text-sm"> 12:45</p>
                <div className="flex justify-center items-center space-x-2">
                  <p><BiEdit /></p>
                  <p><MdDelete /></p>
                </div>
              </div>
            </div>
            <p className="px-4 mt-2"> Really informative</p>
          </div>

          {/* Example comment */}
          <div className="px-2 py-2 rounded-lg bg-gray-300 my-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-black ">@AbhishekKalgudi</h3>
              <div className="flex items-center space-x-4 justify-center">
                <p className="text-grey-500 text-sm"> 19/06/23</p>
                <p className="text-grey-500 text-sm"> 12:45</p>
                <div className="flex justify-center items-center space-x-2">
                  <p><BiEdit /></p>
                  <p><MdDelete /></p>
                </div>
              </div>
            </div>
            <p className="px-4 mt-2"> Really informative</p>
          </div>

          {/* Example comment */}
          <div className="px-2 py-2 rounded-lg bg-gray-300 my-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-black ">@AbhishekKalgudi</h3>
              <div className="flex items-center space-x-4 justify-center">
                <p className="text-grey-500 text-sm"> 19/06/23</p>
                <p className="text-grey-500 text-sm"> 12:45</p>
                <div className="flex justify-center items-center space-x-2">
                  <p><BiEdit /></p>
                  <p><MdDelete /></p>
                </div>
              </div>
            </div>
            <p className="px-4 mt-2"> Really informative</p>
          </div>

          {/* Write a comment */}
          <div className="flex flex-col mt-4 md:flex-row w-full">
            <input placeholder="Write a comment" type="text" className="md:w-[80%] outline-none px-4 mt-4 md:mt-0"/>
            <button className="bg-black text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0 rounded-lg hover:bg-blue-600">Add Comment</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
