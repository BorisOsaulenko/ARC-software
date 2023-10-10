import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginInput from "./LoginInput";
import { BsPerson } from "react-icons/bs";
import { Si1Password } from "react-icons/si";
import "./login.css";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState<any>();
  const [profile, setProfile] = useState([]);
  const [emailInputContent, setEmailInputContent] = useState<string>("");
  const [passwordInputContent, setPasswordInputContent] = useState<string>("");
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  // localStorage.setItem("user", JSON.stringify(credential)); // current account on the device
  // DB.createUserIfNotExist(doc) - create account in the db. User can always login back to it.

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center fullScreenDiv">
      <div className="w-9/24 h-3/4 bg-white rounded-lg text-2xl font-bold text-center loginCard flex flex-col items-end border-1">
        <h1 className="loginHeader pt-12">Login</h1>
        <LoginInput
          type="email"
          placeholder="Type your email"
          Icon={BsPerson}
          onChange={(content: string) => setEmailInputContent(content)}
        />
        <LoginInput
          type="password"
          placeholder="Type your password"
          Icon={Si1Password}
          onChange={(content: string) => setPasswordInputContent(content)}
        />
        <h2
          id="forgotPassword"
          className="text-slate-500 text-lg font-mono font-medium mt-4 cursor-pointer"
          onClick={() => navigate("/forgotPassword")}
        >
          Forgot password?
        </h2>

        <button className="loginButton mt-4 p-3 rounded-lg text-white font-light font-mono">Login</button>

        <div className="loginOptions mt-20 font-light font-mono text-sm">Or sign up using</div>

        <div className="loginOptions flex justify-evenly px-20 mt-8">
          <div
            className="w-10 h-10 rounded-full bg-white border-1 flex items-center justify-center"
            onClick={() => login()}
          >
            <FcGoogle className="text-5xl" />
          </div>
          <div className="w-10 h-10 rounded-full bg-white border-1"></div>
          <div className="w-10 h-10 rounded-full bg-white border-1"></div>
          <div className="w-10 h-10 rounded-full bg-white border-1"></div>
        </div>
      </div>
    </div>
  );
};
export default Login;
