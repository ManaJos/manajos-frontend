import React from "react";
import GameCard from "./GameCard";

interface Game {
  id: number;
  rank: number;
  name: string;
  peak: number;
  image: string;
}

async function getData(): Promise<Game[]> {
  return [
    {
      id: 1,
      rank: 1,
      name: "test",
      peak: 30000,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      rank: 2,
      name: "test2",
      peak: 20000,  
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      rank: 3,
      name: "test3",
      peak: 10000,
      image: "https://via.placeholder.com/150",
    },
  ];
}

export default async function MostPlayedGames() {
  const data = await getData();
  return (
    <div className="h-screen w-full flex flex-wrap justify-center">
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}