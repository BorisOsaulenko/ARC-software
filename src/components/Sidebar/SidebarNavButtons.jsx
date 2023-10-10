import React from "react";
import SidebarNavButtonHeader from "./SidebarNavButtonHeader";
import SidebarNavButtonDropdownContent from "./SidebarNavButtonDropdownContent";

const SidebarNavButtons = ({ buttons, active, setActive }) => {
  return (
    <div style={{ width: "100%" }}>
      {buttons.map((btn) => {
        return (
          <div key={btn.name} className="button">
            <SidebarNavButtonHeader
              name={btn.name}
              Icon={btn.icon}
              link={btn.link}
              dropdowns={btn.dropdowns}
              active={btn.name === active}
              setActive={setActive}
            />
            {btn.dropdowns && (
              <SidebarNavButtonDropdownContent dropdowns={btn.dropdowns} opened={btn.name === active} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SidebarNavButtons;
