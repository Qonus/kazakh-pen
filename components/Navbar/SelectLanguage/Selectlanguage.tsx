'use client'

import React from "react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem
  } from "@nextui-org/dropdown";

export default function SelectLanguage() {
  const items = [
    {
      key: "russian",
      label: "Русский",
    },
    {
      key: "kazakh",
      label: "Қазақша",
    }
  ];

  return (
    <Dropdown>
      <DropdownTrigger>
        <p>Выбрать Язык</p>
      </DropdownTrigger>
      <DropdownMenu 
      aria-label="Dynamic Actions" 
      items={items} 
      variant="light"
      onAction={(key) => alert(key)} //onAction will trigger when you select an option in dropdown
      > 
        {(item) => (
          <DropdownItem
            key={item.key}
            color={item.key === "delete" ? "danger" : "default"}
            className={item.key === "delete" ? "text-danger" : ""}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}