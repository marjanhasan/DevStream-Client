import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogins from "../components/GoogleLogins";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const Login = () => {
  const { signInUser, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    let form = e.target;
    let email = form.email.value;
    let password = form.password.value;
    await signInUser(email, password).then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
        };
        fetch("https://devstream-server.onrender.com/user/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data?.token);
          });
      }
    });
  };

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user, navigate, from]);
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-10 mx-4">
        <div className="flex flex-col justify-center items-center">
          <img src="/public/logo.png" alt="" />
          <h1 className="text-2xl">Learn today and become pro tommorow</h1>
        </div>
        <div className="card bg-base-200 max-w-md w-full rounded-xl mx-auto lg:m-0">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
                name="password"
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
