"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { BlurFade } from "./Fade";
import { Vortex } from "./../../components/ui/vortex";

/******************** home cards *******************/
export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    size,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    size?: number | null;
  }) => (
    <Link href={card.link}>
      <div 
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-[10px] relative bg-transparent dark:bg-neutral-900 overflow-hidden h-60 md:h-96 transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.99]"
        )}
        style={{ width: '100%' }}
      >
        {/* image */}
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute inset-0"
        />
        
        {/* title */}
        <div
          className={cn(
            "absolute inset-0 flex items-end py-8 px-4 transition-opacity duration-300",
            hovered === index ? "bg-black/50" : "bg-transparent"
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
        </div>
      </div>
    </Link>
  )
);

Card.displayName = "Card";

/******************** focus card **************************/
export function FocusCards({ cards }: { cards: { src: string; title: string; size: number; link: string }[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Vortex
      backgroundColor="transparent"
      rangeY={800}
      particleCount={20}
      baseHue={200}
      className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-screen w-screen"
    >
    <div className="flex flex-row flex-wrap justify-end mx-auto md:px-8 w-full h-full">
      {cards.map((card, index) => (
        <div
          key={card.title}
          style={{ width: `${card.size}vw` }}
          className="mx-2 h-60 md:h-96"
        >
          <Card
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            size={card.size}
          />
        </div>
      ))}
    </div>
    </Vortex>
  );
}
