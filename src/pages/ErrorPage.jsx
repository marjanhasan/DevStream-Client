import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="container flex flex-col justify-center items-center h-screen text-center py-32">
      <h1 className=" text-7xl font-extrabold mb-8">Error {status || 404}</h1>
      <p className="lg:text-3xl">{error?.message}</p>
      <button className="rounded-full bg-blue-400 hover:bg-blue-500 px-5 py-2 text-white font-bold mt-8">
        <Link to="/">HomePage</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
