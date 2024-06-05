import { BiSolidHome } from "react-icons/bi";
import { CgMoreO, CgProfile } from "react-icons/cg";
import { FaLaptopCode, FaRegEnvelope, FaSearch } from "react-icons/fa";
import { GrGroup, GrNotification } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const LeftBar = () => {
  return (
    <>
      <ul className="menu pl-5 h-screen">
        <li>
          <img src="/public/logo.png" className="w-24" alt="" />
        </li>
        <li className="text-2xl">
          <Link>
            <BiSolidHome />
            Home
          </Link>
        </li>
        <li className="text-2xl">
          <Link>
            <FaSearch />
            Explore
          </Link>
        </li>
        <li className="text-2xl">
          <Link>
            <GrNotification />
            Notifications
          </Link>
        </li>
        <li className="text-2xl">
          <Link>
            <FaRegEnvelope />
            Messages
          </Link>
        </li>
        <li className="text-2xl">
          <Link>
            <GrGroup />
            Communities
          </Link>
        </li>
        <li className="text-2xl">
          <Link>
            <FaLaptopCode />
            Channel
          </Link>
        </li>
        <li className="text-2xl">
          <Link>
            <IoSettingsOutline />
            Settings
          </Link>
        </li>
        <li className="text-2xl">
          <Link>
            <CgProfile />
            Profile
          </Link>
        </li>
        <li className="text-2xl">
          <Link>
            <CgMoreO />
            More
          </Link>
        </li>
        <li className="text-2xl mt-4">
          <Link>
            <img src="/public/logo.png" className="w-24" alt="" />
            Mr Omuk
          </Link>
        </li>
      </ul>
    </>
  );
};

export default LeftBar;
