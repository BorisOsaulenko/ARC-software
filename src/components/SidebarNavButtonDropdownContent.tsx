import React, { FC, useEffect, useRef, useState } from 'react'
import { FaKeyboard } from 'react-icons/fa' // used just for creating the same margin as parent
import SidebarDropdownLink from './SidebarDropdownLink'
import SidebarDropdownValue from './SidebarDropdownValue'
import SidebarDropdownInput from './SidebarDropdownInput'

type Props = {
    dropdowns: Array<{name: string, value: number, link: string, placeholder: string}>
    opened: boolean,
}

const SidebarNavButtonDropdownContent: FC<Props> = ({
  dropdowns,
  opened,
}) => {
  const dropdownWindow = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={dropdownWindow}
      style={{
        height: opened
          ? dropdownWindow.current?.scrollHeight + "px" // 100% in fixed units for possible animation
          : "0",
      }}

      className='dropdownContent'
    >
      {dropdowns.map((dropdown) => {
        if (dropdown.link !== undefined) {
          return (
            <SidebarDropdownLink
              name={dropdown.name}
              link={dropdown.link}
              key={dropdown.name}
            />
          );
        } else if (dropdown.value !== undefined) {
          return (
            <SidebarDropdownValue
              name={dropdown.name}
              link={dropdown.link}
              value={String(dropdown.value)}
              key={dropdown.name}
            />
          );
        } else {
          return (
            <SidebarDropdownInput
              name={dropdown.name}
              link={dropdown.link}
              key={dropdown.name}
              placeholder={dropdown.placeholder}
            />
          );
        }
      })}
    </div>
  );
};

export default SidebarNavButtonDropdownContent