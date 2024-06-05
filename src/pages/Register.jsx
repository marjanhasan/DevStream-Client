import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogins from "../components/GoogleLogins";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const [passwordMatch, setPasswordMatch] = useState(true);
  const { registerUser, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    let form = e.target;
    let email = form.email.value;
    let name = form.name.value;
    let password = form.password.value;
    let confirmPassword = form.confirmPassword.value;

    if (password === confirmPassword) {
      await registerUser(email, password).then((data) => {
        const userInfo = {
          name: name,
          email: data?.user?.email,
        };
        fetch("https://devstream-server.onrender.com/user/", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => localStorage.setItem("token", data?.token));
      });
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
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
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input input-bordered rounded-lg"
                name="name"
                required
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered rounded-lg"
                name="confirmPassword"
                required
              />
            </div>
            {!passwordMatch && (
              <div className="my-2">
                <p className="text-red-500">Password do not match!</p>
              </div>
            )}
            <div className="form-control mt-6">
              <button className="btn btn-primary rounded-lg">Register</button>
            </div>
            <div className="form-control">
              <GoogleLogins />
            </div>
            <div className="">
              Already have account?{" "}
              <Link to={"/user/login"} className="link link-hover">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
