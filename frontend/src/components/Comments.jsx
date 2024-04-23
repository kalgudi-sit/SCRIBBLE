import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Comments = ({ comment }) => {
  return (
    <div className="px-2 py-1 rounded-lg bg-gray-300 my-2">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-black">@{comment?.author}</h3>
        <div className="flex items-center space-x-4 justify-center">
          <p>{new Date(comment?.updatedAt).toString().slice(0, 15)}</p>
          <p>{new Date(comment?.updatedAt).toString().slice(16, 24)}</p>
          <div className="flex justify-center items-center space-x-2">
            <p className="hover:text-red-500 hover:cursor-pointer p-2 m-1 text-lg">
              <MdDelete />
            </p>
          </div>
        </div>
      </div>
      <p className="px-5 py-1 mt-2">{comment?.comment}</p>
    </div>
  );
};

export default Comments;
