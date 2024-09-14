'use client'

import React from "react";
import Link from "next/link";
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
      key: "rus",
      label: "Русский",
    },
    {
      key: "kaz",
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
       //onAction will trigger when you select an option in dropdown
      > 
        <DropdownItem key="kaz"> <Link href="/kaz"> Қазақша </Link></DropdownItem>
        <DropdownItem key="rus" className="text-danger" color="primary">
        <Link href="/rus"> Русский </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}