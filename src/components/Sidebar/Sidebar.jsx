import React, { useState } from "react";
import SidebarNavButtons from "./SidebarNavButtons";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import { FiSliders } from "react-icons/fi";
import { getPicture, getSidebarButtons, getSidebarHelperButtons } from "../../utils";
import "./css/logo.css";
import "./css/sidebarDropdown.css";
import "./css/needHelpInscription.css";
import "./css/customHR.css";
import "./css/Sidebar.css";
import "./css/button.css";

import { Button } from "react-bootstrap";

const Sidebar = () => {
  const [active, setActive] = useState("");

  return (
    <nav id="sidebar">
      {/* header of the sidebar - logo */}

      <div className="sidebarLogo">
        <img src="http://localhost:3000/media/logo.png" alt="" width={80} />
      </div>
      <SidebarNavButtons buttons={getSidebarButtons()} active={active} setActive={setActive} />
      <div className="hr-container">
        <div className="customHR"></div>
      </div>
      {/* hr */}

      <span className="needHelp">Need help?</span>
      {/* 'need help subscription for hr' */}
      <SidebarNavButtons buttons={getSidebarHelperButtons()} active={active} setActive={setActive} />

      <div className="d-grid flex flex-grow items-end w-full pl-6 pr-7">
        <Button
          variant="primary"
          size="lg"
          className="mb-6 bg-buttonPrimary w-full flex items-center justify-center mt-3"
        >
          <FiSliders className="mr-4" />
          Customize
        </Button>
      </div>

      <div className="flex py-4 px-9 justify-between border-t-1 w-full items-center">
        <AiOutlineBell className="text-2xl font-thin" />
        <div
          className=" rounded-full w-10 h-10 border-1 bg-cover"
          style={{ backgroundImage: `url(${getPicture()})` }}
        />

        <AiOutlineSearch className="text-2xl font-thin" />
      </div>
    </nav>
  );
};

export default Sidebar;
