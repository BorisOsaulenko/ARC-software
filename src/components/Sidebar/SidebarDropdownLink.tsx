import React, { FC } from 'react'
import { FaKeyboard } from 'react-icons/fa' // just for same margins as parent
import { useNavigate } from 'react-router-dom'

type Props = {
    name: string,
    link: string,
}

const SidebarDropdownLink: FC<Props> = ({name, link}) => {
  const navigate = useNavigate();

  return (
    <div
      className='dropdownItem sidebar-link'
      onClick={() => navigate(link)}
    >
      <FaKeyboard
        className='dropdownIcon'
      />
      <span style={{ marginLeft: "1rem" }}>
        {name}
      </span>
    </div>
  );
}

export default SidebarDropdownLink