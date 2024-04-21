import { IF } from "../url"

const HomePost = ({post}) => {
  return (
    <div className="w-full flex mt-8 space-x-5">
      {/* LeftSide */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src={IF + post.photo}
          alt="post image"
          className="h-full w-full object-cover"
        />
      </div>
      {/* RightSide */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-lg font-bold md:mb-1 mb-1 md:text-2xl">
          {post.title.toUpperCase()}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@{post.username}</p>
          <div className="flex space-x-2 text-sm">
            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          {post.description.slice(0,200) + "... Read more"}
        </p>
      </div>
    </div>
  );
};

export default HomePost;
