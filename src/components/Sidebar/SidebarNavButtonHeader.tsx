import React, { FC } from "react";
import { IconType } from "react-icons";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

type Props = {
  name: string;
  Icon: IconType;
  link: string;
  dropdowns: Array<Object>;
  active: boolean;
  setActive: (name: string) => void;
};

const SidebarNavButton: FC<Props> = ({
  name,
  Icon,
  link,
  dropdowns,
  active,
  setActive
}) => {
  const navigate = useNavigate();

  return (
    <div //header of dropdown button
      className={"dropdownHeader " + (active ? "active" : '')}

      onClick={() => {
        active ? setActive('') : setActive(name)
      }}
    >
      <Icon className="dropdownHeaderIcon" />
      <span className="dropdownHeaderButtonName" onClick={() => link && navigate(link)}>
        {name}
      </span>
      {dropdowns && (
        <RiArrowDropDownLine className="dropdownHeaderArrow" style={{rotate: active ? '180deg' : '0deg'}} />
      )}
    </div>
  );
};

export default SidebarNavButton;