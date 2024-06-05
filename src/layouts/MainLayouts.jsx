import { Outlet } from "react-router-dom";
import LeftBar from "../components/Shared/LeftBar";
import RightBar from "../components/Shared/RightBar";

const MainLayouts = () => {
  return (
    <div className="flex relative min-h-screen">
      <div className="w-[23%] border-r border-[#2f3336] max-h-screen sticky top-0 left-0">
        <LeftBar />
      </div>

      <div className="flex-1 border-r border-[#2f3336] scroll-smooth">
        <Outlet />
      </div>
      <div className="w-[33%] sticky top-0 right-0 h-fit scroll-smooth">
        <RightBar />
      </div>
    </div>
  );
};

export default MainLayouts;
