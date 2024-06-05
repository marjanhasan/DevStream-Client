import { useState } from "react";
import SearchResult from "./SearchResult";

const SearchBar = () => {
  const token = localStorage.getItem("token");
  const [userInfo, setUserInfo] = useState({});
  const [clicked, setClicked] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.search.value;
    await fetch(`https://devstream-server.onrender.com/profile/${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data[0]);
        console.log(data);
        setClicked(true);
      });
  };
  return (
    <div className="mx-5 my-3">
      <form
        onSubmit={handleSubmit}
        className="input input-bordered rounded-full bg-base-200 flex items-center gap-2"
      >
        <input
          type="text"
          className="grow"
          placeholder="Search"
          name="search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </form>
      <div className={`${clicked ? "block" : "hidden"}`}>
        <SearchResult userInfo={userInfo} />
      </div>
    </div>
  );
};

export default SearchBar;
