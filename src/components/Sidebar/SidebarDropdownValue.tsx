import React, { FC } from 'react'
import { FaKeyboard } from 'react-icons/fa' // only for same margins as parent
import { useNavigate } from 'react-router-dom'

type Props = {
    name: string,
    link: string,
    value: string,
}

const SidebarDropdownValue: FC<Props> = ({name, link, value}) => {
  const navigate = useNavigate()

  return (
    <div className="dropdownItem sidebar-value" key={name} onClick={() => navigate(link)}>
      <FaKeyboard className="dropdownIcon" />
      <span style={{ marginLeft: "1rem" }}>
        {name}
      </span>
      <span
        style={{
          flexGrow: 1,
          textAlign: "right",
        }}
      >
        {value}
      </span>
    </div>
  );
}

export default SidebarDropdownValue