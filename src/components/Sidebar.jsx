import React, { useState } from "react";
import SidebarNavButtons from "./SidebarNavButtons";
import { FaQuestion } from "react-icons/fa";
import { getSidebarButtons, getSidebarHelperButtons } from "../utils";
import "./Sidebar.css";

const Sidebar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className="sidebar">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "12px",
        }}
      >
        <img src="http://localhost:3000/media/logo.png" alt="" width={80} />
      </div>
      {/* //header of the sidebar - logo */}

      <SidebarNavButtons
        buttons={getSidebarButtons()}
        active={active}
        setActive={setActive}
      />

      <div style={{ position: "relative", width: "100%", marginTop: "12px" }}>
        <div
          className=" h-px border-b-1 ml-6 mr-7"
          style={{
            height: "1px",
            borderBottomWidth: "1px",
            marginLeft: "24px",
            marginRight: "28px",
          }}
        ></div>
      </div>
      {/* hr */}

      <span className="needHelp">Need help?</span>
      {/* 'need help subscription for hr' */}

      <SidebarNavButtons
        buttons={getSidebarHelperButtons()}
        active={active}
        setActive={setActive}
      />
    </nav>
  );
};

export default Sidebar;
