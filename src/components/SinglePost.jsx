/* eslint-disable react/prop-types */
import { BiMessageRounded } from "react-icons/bi";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { RiShare2Line } from "react-icons/ri";
import { ImLoop } from "react-icons/im";
import { Link } from "react-router-dom";

const SinglePost = ({ singlePost }) => {
  return (
    <Link to={`/posts/${singlePost._id}`}>
      <div className="border-b border-gray-700 p-4">
        <div className="flex gap-4">
          <img
            className="w-12 rounded-full border-2 border-black"
            src="/placeholder.jpg"
          />
          <div>
            <p className="font-bold">{singlePost?.username}</p>
            <p className="text-gray-600">{singlePost?.email}</p>
          </div>
        </div>
        <p className="pl-16 pt-3">{singlePost?.post}</p>
        <div className="flex justify-between items-center text-gray-600 text-2xl gap-3 mt-3 pl-16">
          <BiMessageRounded />
          <ImLoop />
          <FaRegHeart />
          <VscGraph />
          <FaRegBookmark />
          <RiShare2Line />
        </div>
      </div>
    </Link>
  );
};

export default SinglePost;
