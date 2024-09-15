'use client'

import React from "react";
import Link from "next/link";
import {usePathname, useRouter} from '@/src/i18n/routing';

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
        <DropdownItem key="kaz"> <Link href="/kaz" locale="kaz"> Қазақша </Link> </DropdownItem>
        <DropdownItem key="rus"> <Link href="/rus" locale="rus"> Русский </Link> </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}