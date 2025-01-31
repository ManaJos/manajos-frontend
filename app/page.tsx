"use client"

import React from "react";
import {Card, CardHeader, CardFooter, Image} from "@heroui/react";
import { FocusCards } from "./Components/HomeCards";

interface ImageWithHoverProps {
  src: string;
  alt: string;
  text: string;
}

const cards = [
  { title: "Most played games", size: 50 , src: "https://media.istockphoto.com/id/1396079593/fr/photo/manette-de-jeu-et-casque-avec-espace-de-copie-rendu-3d.jpg?s=612x612&w=0&k=20&c=oi9WyINUnd-WqID0XjD_SQTF0siOcomBDehQTg2Ztoo=" },
  { title: "Most downloaded games", size: 25 , src: "https://media.istockphoto.com/id/1396079593/fr/photo/manette-de-jeu-et-casque-avec-espace-de-copie-rendu-3d.jpg?s=612x612&w=0&k=20&c=oi9WyINUnd-WqID0XjD_SQTF0siOcomBDehQTg2Ztoo=" },
  { title: "Most player connected games", size: 50 , src: "https://media.istockphoto.com/id/1396079593/fr/photo/manette-de-jeu-et-casque-avec-espace-de-copie-rendu-3d.jpg?s=612x612&w=0&k=20&c=oi9WyINUnd-WqID0XjD_SQTF0siOcomBDehQTg2Ztoo=" },
  { title: "All games", size: 25 , src: "https://media.istockphoto.com/id/1396079593/fr/photo/manette-de-jeu-et-casque-avec-espace-de-copie-rendu-3d.jpg?s=612x612&w=0&k=20&c=oi9WyINUnd-WqID0XjD_SQTF0siOcomBDehQTg2Ztoo=" },
];


export default function Home() {
  return (
<div className="h-screen w-full flex flex-wrap justify-end items-start ">
    <FocusCards cards={cards} />
</div>
  );
}
