import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const login = (credential) => {
    let doc = {
      name: credential.name,
      picture: credential.picture,
      _type: "user",
      _id: credential.jti,
    };

    localStorage.setItem("user", JSON.stringify(credential)); // current account on the device
    // DB.createUserIfNotExist(doc) - create account in the db. User can always login back to it.

    navigate("/home");
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center bg-black">
      <video
        src="/media/share.mp4"
        className="absolute top-0 bottom-0 left-0 right-0"
        autoPlay
        muted
        loop
      />

      <h1 className="text-9xl z-10 py-7 bg-gradient-to-tl to-purple-300 from-pink-700 bg-clip-text text-transparent mb-10">
        Blog name
      </h1>

      <GoogleLogin
        render={(renderProps) => {
          return (
            <button
              type="button"
              className="flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <FcGoogle className="mr-4" /> Sign in with your Google Account
            </button>
          );
        }}
        cookiePolicy="single_host_origin"
        onSuccess={(credentials) => {
          login(jwt_decode(credentials.credential));
        }}
        onError={(err) => {
          console.log("Some error occurred", err);
        }}
      />
    </div>
  );
};
export default Login;
