import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  console.log(process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID);
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <video
        src="/media/share.mp4"
        className="absolute top-0 bottom-0 left-0 right-0"
        autoPlay
        muted
        loop
      />

      <GoogleOAuthProvider>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
          render={(renderProps) => {
            <button
              type="button"
              className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <FcGoogle className="mr-4" /> Sign in with your Google Account
            </button>;
          }}
          cookiePolicy="single_host_origin"
          onSuccess={() => {}}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;
