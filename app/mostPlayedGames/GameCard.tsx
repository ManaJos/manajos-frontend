"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image } from "@heroui/react";

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
    <Card className="rounded-[10px] border overflow-hidden w-56 md:w-1/3 p-4 m-2">
      <CardHeader>
        <h3 className="text-lg font-bold">{game.name}</h3>
      </CardHeader>
      <Image src={game.image} alt={game.name} className="object-cover w-full h-48" />
      <CardBody>
        <p>Rank: {game.rank}</p>
        <p>Peak: {game.peak}</p>
      </CardBody>
      <CardFooter>
        {/* Ajoutez ici tout autre contenu de pied de carte si nécessaire */}
      </CardFooter>
    </Card>
  );
};

export default GameCard;