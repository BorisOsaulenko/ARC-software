import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const Login = () => {
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
          clientId=""
          render={(renderProps) => {
            <button
              type="button"
              className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            ></button>;
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;
