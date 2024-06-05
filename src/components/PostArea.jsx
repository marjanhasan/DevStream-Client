/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { GrLocation } from "react-icons/gr";
import {
  MdOutlineEmojiEmotions,
  MdOutlineGifBox,
  MdOutlinePhotoSizeSelectActual,
  MdOutlinePoll,
} from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import useAuth from "../hooks/useAuth";

const PostArea = ({ setCnt, cnt }) => {
  const token = localStorage.getItem("token");
  const { user } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = form.textPost.value;
    const userData = {
      username: user?.displayName,
      email: user?.email,
      post: data,
    };
    await fetch(`https://devstream-server.onrender.com/posts/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Post Added Successful");
        setCnt(cnt + 1);
        form.reset();
      });
  };
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="form-control mx-auto">
        <div className="label border-b border-gray-700 px-4">
          <span className="label-text text-xl">Share your thoughts</span>
        </div>
        <textarea
          type="text"
          placeholder="Type here"
          className="input focus:outline-none border-none w-full h-24 resize-none"
          name="textPost"
        />
        <div className="label border-y border-gray-700 px-5">
          <div className="flex justify-between text-2xl gap-3 text-blue-400">
            <MdOutlinePhotoSizeSelectActual />
            <MdOutlineGifBox />
            <MdOutlinePoll />
            <MdOutlineEmojiEmotions />
            <RiCalendarScheduleLine />
            <GrLocation />
          </div>
          <button className="rounded-full bg-blue-400 px-5 py-2 text-white font-bold">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostArea;
