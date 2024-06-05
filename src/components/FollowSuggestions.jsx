const FollowSuggestions = () => {
  return (
    <>
      <div className="flex gap-2 my-2">
        <img
          className="w-12 rounded-full border-2 border-black"
          src="/placeholder.jpg"
        />
        <div>
          <p className="font-bold">Mr X</p>
          <p className="text-gray-600">x@email.com</p>
        </div>
        <button className="rounded-full bg-white px-5 py-0 text-black ml-auto font-medium">
          Follow
        </button>
      </div>
    </>
  );
};

export default FollowSuggestions;
