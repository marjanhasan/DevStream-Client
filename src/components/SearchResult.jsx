/* eslint-disable react/prop-types */
const SearchResult = ({ userInfo }) => {
  return (
    <>
      <div className="card w-96 border rounded-lg border-base-300 shadow-xl mx-auto mt-2">
        <div className="card-body">
          <div className="flex gap-2 my-2">
            <img
              className="w-12 rounded-full border-2 border-black"
              src="/placeholder.jpg"
            />
            <div>
              <p className="font-bold">{userInfo?.username}</p>
              <p className="text-gray-600">{userInfo?.email}</p>
            </div>
            <button className="rounded-full bg-white px-5 py-0 text-black ml-auto font-medium">
              Follow
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
