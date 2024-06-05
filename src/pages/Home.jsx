import { useEffect, useState } from "react";
import PostArea from "../components/PostArea";
import SinglePost from "../components/SinglePost";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const token = localStorage.getItem("token");
  const [allPost, setAllPost] = useState([]);
  const [cnt, setCnt] = useState(0);
  const { loading, setLoading } = useAuth();
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      await fetch("https://devstream-server.onrender.com/posts/", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(true);
          if (data?.error) {
            return setLoading(false);
            // return setAllPost([]);
          }
          setAllPost(data);
          setLoading(false);
        });
    };
    fetchData();
  }, [token, cnt, setLoading]);
  return (
    <div className="">
      <PostArea setCnt={setCnt} cnt={cnt} />
      {loading ||
        (allPost?.length === 0 ? (
          <h1 className="text-center text-xl font-bold mt-5">No Data Found</h1>
        ) : (
          allPost?.map((singlePost) => (
            <SinglePost key={singlePost._id} singlePost={singlePost} />
          ))
        ))}
    </div>
  );
};

export default Home;
