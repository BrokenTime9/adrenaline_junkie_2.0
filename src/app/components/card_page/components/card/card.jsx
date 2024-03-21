"use client";
import React from "react";
import ButtonSmall from "@/app/components/button";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

export default function Card({ elem }) {
  const router = useRouter();
  return (
    <div
      className={styles.item}
      onClick={() => {
        router.push(elem.path);
      }}
    >
      <p>{elem.name}</p>
      <ButtonSmall link={elem.path} />
    </div>
  );
}
