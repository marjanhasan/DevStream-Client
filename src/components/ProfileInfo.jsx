import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import SinglePost from "./SinglePost";

const ProfileInfo = () => {
  const [allPost, setAllPost] = useState([]);
  const token = localStorage.getItem("token");
  const { user } = useAuth();
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      await fetch(
        `https://devstream-server.onrender.com/profile/${user?.email}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.error) {
            return setAllPost([]);
          }
          setAllPost(data);
        });
    };
    fetchData();
  }, [token]);
  return (
    <div className="pl-8">
      <h1 className="text-2xl font-bold">
        {user?.displayName ? user?.displayName : user?.email?.split("@")[0]}
      </h1>
      <p className="text-gray-600 text-sm mt-1">{user?.email}</p>
      <p className="mt-2">User short description feature will be added soon.</p>
      <div className="flex gap-2 font-bold my-2">
        50<span className="font-medium text-gray-600">Following</span>
        50<span className="font-medium text-gray-600">Followers</span>
      </div>
      <div role="tablist" className="tabs tabs-bordered">
        <a role="tab" className="tab tab-active">
          Posts
        </a>
        <a role="tab" className="tab">
          Replies
        </a>
        <a role="tab" className="tab">
          Highlights
        </a>
        <a role="tab" className="tab">
          Articles
        </a>
        <a role="tab" className="tab">
          Media
        </a>
        <a role="tab" className="tab">
          Likes
        </a>
      </div>
      {allPost?.length === 0 ? (
        <h1 className="text-center text-xl font-bold mt-5">No Data Found</h1>
      ) : (
        allPost?.map((singlePost) => (
          <SinglePost key={singlePost._id} singlePost={singlePost} />
        ))
      )}
    </div>
  );
};

export default ProfileInfo;
