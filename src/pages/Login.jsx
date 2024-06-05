import { Link } from "react-router-dom";
import GoogleLogins from "../components/GoogleLogins";

const Login = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-10 mx-4">
        <div className="flex flex-col justify-center items-center">
          <img src="/public/logo.png" alt="" />
          <h1 className="text-2xl">Learn today and become pro tommorow</h1>
        </div>
        <div className="card bg-base-200 max-w-md w-full rounded-xl mx-auto lg:m-0">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered rounded-lg"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered rounded-lg"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary rounded-lg">Login</button>
            </div>
            <div className="form-control">
              <GoogleLogins />
            </div>
            <div className="">
              New Here?{" "}
              <Link to={"/user/register"} className="link link-hover">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
