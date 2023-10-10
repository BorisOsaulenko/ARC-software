import React, { ChangeEvent, FunctionComponent } from "react";
import { IconType } from "react-icons";

type loginInput = {
  type: string;
  placeholder: string;
  Icon: IconType;
  onChange: (e: string) => void;
  containerId?: string;
};

const LoginInput: FunctionComponent<loginInput> = ({ type, placeholder, Icon, onChange, containerId }) => {
  return (
    <div className="w-5/6 border-b-2 border-black flex relative loginInputContainer mt-16" id={containerId}>
      <Icon className="absolute bottom-2 text-4xl" />
      <input
        type={type}
        placeholder={placeholder}
        className="pl-12 pb-2 focus:outline-none font-light loginInput"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default LoginInput;
