import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Comments = () => {
  return (
    <div className="px-2 py-2 rounded-lg bg-gray-300 my-2">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-black ">@AbhishekKalgudi</h3>
        <div className="flex items-center space-x-4 justify-center">
          <p className="text-grey-500 text-sm"> 19/06/23</p>
          <p className="text-grey-500 text-sm"> 12:45</p>
          <div className="flex justify-center items-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
      </div>
      <p className="px-4 mt-2"> Really informative</p>
    </div>
  );
};

export default Comments;
