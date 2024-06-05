import { FcGoogle } from "react-icons/fc";

const GoogleLogins = () => {
  return (
    <div>
      <button className="btn btn-primary rounded-lg w-full">
        <div className="flex items-center gap-2">
          <FcGoogle size={24} />
          <p>Google</p>
        </div>
      </button>
    </div>
  );
};

export default GoogleLogins;
