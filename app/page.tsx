"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <>
      <Button
        text="Hello World!"
        header="Qonus"
        click={() => {
          console.log("Hello Qonus!");
        }}
      />
    </>
  );
}
