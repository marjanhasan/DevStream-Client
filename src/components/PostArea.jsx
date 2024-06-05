import { GrLocation } from "react-icons/gr";
import {
  MdOutlineEmojiEmotions,
  MdOutlineGifBox,
  MdOutlinePhotoSizeSelectActual,
  MdOutlinePoll,
} from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";

const PostArea = () => {
  return (
    <div className="w-full">
      <label className="form-control mx-auto">
        <div className="label border-b border-gray-700 px-4">
          <span className="label-text text-xl">Share your thoughts</span>
        </div>
        <textarea
          type="text"
          placeholder="Type here"
          className="input focus:outline-none border-none w-full h-24 resize-none"
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
      </label>
    </div>
  );
};

export default PostArea;
