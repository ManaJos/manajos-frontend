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
  { title: "Most played games", size: 70 , src: "https://media.istockphoto.com/id/1396079593/fr/photo/manette-de-jeu-et-casque-avec-espace-de-copie-rendu-3d.jpg?s=612x612&w=0&k=20&c=oi9WyINUnd-WqID0XjD_SQTF0siOcomBDehQTg2Ztoo=" },
  { title: "Most downloaded games", size: 23 , src: "https://cdn.discordapp.com/attachments/1329760065535737889/1337169168000090203/to9bwWVz25vKWYKssTApc8-1200-80.png?ex=67a67755&is=67a525d5&hm=efd7054e130827f64d70813e4c0ec6d32c57ef6dd588862d066464ca8d2d2339&" },
  { title: "Games on sale", size: 23 , src: "https://cdn.mos.cms.futurecdn.net/4JETjErxBnB2jNSwnrLkyQ-1200-80.jpg" },
  { title: "All games", size: 70 , src: "https://5.imimg.com/data5/SELLER/Default/2020/11/XP/OL/UI/51145740/pc-games-dvd.jpg" },
];


export default function Home() {
  return (
<div className="h-screen w-full flex flex-wrap justify-end items-start ">
    <FocusCards cards={cards} />
</div>
  );
}
  