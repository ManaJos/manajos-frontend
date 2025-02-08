"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import Image from "next/image";

interface GameCardProps {
  game: {
    id: number;
    rank: number;
    name: string;
    peak: number;
    image: string;
  };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Card className="rounded-[15px] bg-transparent border overflow-hidden w-80 h-64 m-2 flex flex-col hover:shadow-lg transition duration-300 ease-in-out relative group">
      <CardHeader className="flex-shrink-0 flex flex-col items-start justify-end z-10">
        <div>
          <p className="text-gray-300 font-bold text-lg">{game.rank}</p>
          <p className="text-gray-300 font-bold">Peak: {game.peak}</p>
        </div>
        <h3 className="text-lg font-bold">{game.name}</h3>
      </CardHeader>
      <Image src={game.image} alt={game.name} layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
    </Card>
  );
};

export default GameCard;