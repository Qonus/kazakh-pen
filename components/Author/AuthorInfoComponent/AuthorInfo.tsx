"use client";
import Image from "next/image";
import styles from "./AuthorInfo.module.scss";
import { useState, useRef, useEffect } from "react";
import AuthorNumbers from "../AuthorNumbersComponent/AuthorNumbers";

export default function AuthorInfo({
  firstName = "Abai",
  lastName = "Kunanbaev",
  pages = 0,
  likes = 0,
  birthDate = "1999",
  deathDate = "2000",
  nationality = "Казак",
  description = "",
  image = "/profile_picture_placeholder.png",
}: {
  firstName: string;
  lastName: string;
  pages: number;
  likes: number;
  birthDate: string;
  deathDate: string;
  nationality: string;
  description: string;
  image: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const descriptionElement = textRef.current;
    if (descriptionElement) {
      const handleResize = () => {
        setIsOverflowing(
          descriptionElement.scrollHeight > descriptionElement.clientHeight
        );
      };

      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(descriptionElement);

      // Initial check
      handleResize();

      return () => {
        resizeObserver.unobserve(descriptionElement);
      };
    }
  }, [description]);

  const on_click_read_more = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.author_info + " glass"}>
      <div className={styles.author_info__left}>
        <Image
          className={styles.author_info__left__image}
          src={image}
          alt="Picture of the author"
          width={200}
          height={200}
        />
        <p className={styles.author_info__text}>
          {birthDate} - {deathDate}
        </p>
        <p className={styles.author_info__text}>{nationality}</p>
      </div>
      <div className={styles.author_info__right}>
        <h2>
          {firstName} {lastName}
        </h2>
        <AuthorNumbers pages={pages} likes={likes} />
        <p
          ref={textRef}
          className={
            styles.author_info__text +
            " " +
            (isExpanded
              ? styles.author_info__expanded
              : styles.author_info__ellipsis)
          }
        >
          {description}
        </p>
        {(isOverflowing || isExpanded) && (
          <button
            className={
              styles.author_info__text +
              " " +
              styles.author_info__right__read_more_button
            }
            onClick={on_click_read_more}
          >
            {isExpanded ? "Свернуть" : "Читать дальше"}
          </button>
        )}
      </div>
    </div>
  );
}
