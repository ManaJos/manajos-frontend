"use client"

import React from "react";
import {Card, CardHeader, CardFooter, Image} from "@heroui/react";

interface ImageWithHoverProps {
  src: string;
  alt: string;
  text: string;
}



export default function Home() {
  return (
<div className="h-screen w-full flex flex-wrap justify-end items-start">
  <div className="relative">
    <Image className="m-2 w-[50vw] h-[25vw]" isBlurred isZoomed src="https://media.istockphoto.com/id/1396079593/fr/photo/manette-de-jeu-et-casque-avec-espace-de-copie-rendu-3d.jpg?s=612x612&w=0&k=20&c=oi9WyINUnd-WqID0XjD_SQTF0siOcomBDehQTg2Ztoo=" />
    {/*<p className="absolute ::after">polo bleu</p>*/}
  </div>
      <Image className="m-2 w-[25vw] h-[25vw]" isBlurred isZoomed src="https://media.istockphoto.com/id/1396079593/fr/photo/manette-de-jeu-et-casque-avec-espace-de-copie-rendu-3d.jpg?s=612x612&w=0&k=20&c=oi9WyINUnd-WqID0XjD_SQTF0siOcomBDehQTg2Ztoo=" />
      <Image className="m-2 w-[50vw] h-[25vw]" isBlurred isZoomed src="https://media.istockphoto.com/id/1396079593/fr/photo/manette-de-jeu-et-casque-avec-espace-de-copie-rendu-3d.jpg?s=612x612&w=0&k=20&c=oi9WyINUnd-WqID0XjD_SQTF0siOcomBDehQTg2Ztoo=" />
      <Image className="m-2 w-[25vw] h-[25vw]" isBlurred isZoomed src="https://media.istockphoto.com/id/1396079593/fr/photo/manette-de-jeu-et-casque-avec-espace-de-copie-rendu-3d.jpg?s=612x612&w=0&k=20&c=oi9WyINUnd-WqID0XjD_SQTF0siOcomBDehQTg2Ztoo=" />
    </div>
  );
}
