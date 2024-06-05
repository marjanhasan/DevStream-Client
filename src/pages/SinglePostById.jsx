import { BiMessageRounded } from "react-icons/bi";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import { RiShare2Line } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import { useLoaderData } from "react-router-dom";

const SinglePostById = () => {
  const data = useLoaderData();
  console.log(data);
  //   const [data, setData] = useState([]);
  //   const token = localStorage.getItem("token");
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       await fetch(
  //         `https://devstream-server.onrender.com/posts/${user?.email}`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "content-type": "application/json",
  //             authorization: `Bearer ${token}`,
  //           },
  //         }
  //       )
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data?.error) {
  //             return setAllPost([]);
  //           }
  //           setAllPost(data);
  //         });
  //     };
  //     fetchData();
  //   }, [token, user?.email]);
  //   console.log(data);
  return (
    <div className="border-b border-gray-700 p-4">
      <div className="flex gap-4">
        <img
          className="w-12 rounded-full border-2 border-black"
          src="/placeholder.jpg"
        />
        <div>
          <p className="font-bold">{data?.username}</p>
          <p className="text-gray-600">{data?.email}</p>
        </div>
      </div>
      <p className="pl-16 pt-3">{data?.post}</p>
      <div className="flex justify-between items-center text-gray-600 text-2xl gap-3 mt-3 pl-16">
        <BiMessageRounded />
        <ImLoop />
        <FaRegHeart />
        <VscGraph />
        <FaRegBookmark />
        <RiShare2Line />
      </div>
    </div>
  );
};

export default SinglePostById;
