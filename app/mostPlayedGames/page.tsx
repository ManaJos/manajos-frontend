import React from "react";
import GameCard from "./GameCard";
import { Vortex } from "./../../components/ui/vortex";

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
      image: "https://media.istockphoto.com/id/1334436084/fr/photo/vue-de-haut-en-bas-des-accessoires-de-jeu-illuminés-colorés-posés-sur-la-table.jpg?s=612x612&w=0&k=20&c=Bz8B7E-vchK6QE5fn8YbiwKhgEpk3l_qSwOJdExn9kc=",
    },
    {
      id: 2,
      rank: 2,
      name: "test2",
      peak: 20000,  
      image: "https://media.istockphoto.com/id/1334436084/fr/photo/vue-de-haut-en-bas-des-accessoires-de-jeu-illuminés-colorés-posés-sur-la-table.jpg?s=612x612&w=0&k=20&c=Bz8B7E-vchK6QE5fn8YbiwKhgEpk3l_qSwOJdExn9kc=",
    },
    {
      id: 3,
      rank: 3,
      name: "test3",
      peak: 10000,
      image: "https://media.istockphoto.com/id/1334436084/fr/photo/vue-de-haut-en-bas-des-accessoires-de-jeu-illuminés-colorés-posés-sur-la-table.jpg?s=612x612&w=0&k=20&c=Bz8B7E-vchK6QE5fn8YbiwKhgEpk3l_qSwOJdExn9kc=",
    },
    {
      id: 4,
      rank: 4,
      name: "test4",
      peak: 5000,
      image: "https://media.istockphoto.com/id/1334436084/fr/photo/vue-de-haut-en-bas-des-accessoires-de-jeu-illuminés-colorés-posés-sur-la-table.jpg?s=612x612&w=0&k=20&c=Bz8B7E-vchK6QE5fn8YbiwKhgEpk3l_qSwOJdExn9kc=",
    }
  ];
}

export default async function MostPlayedGames() {
  const data = await getData();
  return (
    <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={20}
        baseHue={200}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-screen w-screen"
      >
      <div className="h-screen w-screen flex justify-start flex-col items-center">
        <div className="justify-center flex flex-col"> 
          <div className="self-start m-2">
            <h1 className="text-4xl font-bold">Most Played Games</h1>
          </div>
          <div className="grid grid-cols-4 gap-4 justify-center">
            {data.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </div>
    </Vortex>
  );
}