import { BiSolidHome } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaLaptopCode, FaRegEnvelope, FaSearch } from "react-icons/fa";
import { GrGroup, GrNotification } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LeftBar = () => {
  const { logout, user } = useAuth();
  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("token");
  };
  return (
    <>
      <ul className="menu pl-5 lg:h-screen">
        <li>
          <img src="/public/logo.png" className="w-24" alt="" />
        </li>
        <li className="text-2xl">
          <Link>
            <BiSolidHome />
            Home
          </Link>
        </li>
        <li className="text-2xl disabled">
          <Link>
            <FaSearch />
            Explore
          </Link>
        </li>
        <li className="text-2xl disabled">
          <Link>
            <GrNotification />
            Notifications
          </Link>
        </li>
        <li className="text-2xl disabled">
          <Link>
            <FaRegEnvelope />
            Messages
          </Link>
        </li>
        <li className="text-2xl disabled">
          <Link>
            <GrGroup />
            Communities
          </Link>
        </li>
        <li className="text-2xl disabled">
          <Link>
            <FaLaptopCode />
            Channel
          </Link>
        </li>
        <li className="text-2xl disabled">
          <Link>
            <IoSettingsOutline />
            Settings
          </Link>
        </li>
        <li className="text-2xl">
          <Link to={"/profile"}>
            <CgProfile />
            Profile
          </Link>
        </li>
        <li className="text-2xl">
          <Link onClick={handleLogout}>
            <PiSignOutBold />
            Logout
          </Link>
        </li>
        <li className="text-xl mt-6 flex">
          <Link to={"/profile"}>
            <div className="flex items-center gap-4">
              <img
                className="w-12 rounded-full border-2 border-black"
                src={user?.photoURL || "/placeholder.jpg"}
              />
              <span className="text-wrap">
                {user?.displayName
                  ? user?.displayName?.split(" ")[0]
                  : user?.email?.split("@")[0]}
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default LeftBar;
