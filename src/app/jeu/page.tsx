"use client";
import { Student } from "@/types/student";
import fetcher from "@/utils/fetcher";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import { Button } from "@mantine/core";
import ColorShuffle from "./components/ColorShuffle";

export default function Page() {
  useEffect(() => {
    const shuffledColors = shuffleArray([...colors]);
    console.log(shuffledColors);
  }, []);

  return (
    <div>
      <h1>Jeu de coulers</h1>
      <p></p>
    </div>
  );
}
