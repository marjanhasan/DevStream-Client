import useAuth from "../hooks/useAuth";

const CoverPhoto = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="h-72 bg-base-300 flex justify-center items-center">
        <h1 className="text-2xl font-bold">
          Cover photo feature is coming soon.
        </h1>
      </div>
      <div className="px-5 flex justify-between py-2">
        <img
          className="w-32 -mt-12 rounded-full border-4 border-black"
          src={user?.photoURL || "/placeholder.jpg"}
        />
        <button className="h-10 rounded-full bg-white px-5 py-0 text-black ml-auto font-medium">
          Edit Profile
        </button>
      </div>
    </>
  );
};

export default CoverPhoto;
