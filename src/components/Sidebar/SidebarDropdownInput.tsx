import React, { FC, useState } from 'react'
import { FaKeyboard } from 'react-icons/fa' // just for same margins as parent
import { useNavigate } from 'react-router-dom'

type Props = {
    name: string,
    link: string,
    placeholder: string
}

const SidebarDropdownInput: FC<Props> = ({name, link, placeholder}) => {
  const navigate = useNavigate()

  return (
    <div className="sidebar-dropdownItem">
      <FaKeyboard className="dropdownIcon" />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ marginLeft: "1rem" }} onClick={() => navigate(link)}>
          {name}
        </span>

        <div className=' w-4/5 relative left-7 mt-1'>
          <input placeholder={placeholder} className="dropdownInput rounded-sm"></input>
        </div>
      </div>
    </div>
  );
}

export default SidebarDropdownInput