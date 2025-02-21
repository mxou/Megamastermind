"use client";
import { Student } from "@/types/student";
import fetcher from "@/utils/fetcher";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import { Button } from "@mantine/core";

export default function Page() {
  const colors = ["red", "blue", "green", "yellow", "pink", "orange"];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    const shuffledColors = shuffleArray([...colors]);
    console.log(shuffledColors);
  }, []);

  return (
    <div>
      <h1>Jeu de coulers</h1>
    </div>
  );
}
