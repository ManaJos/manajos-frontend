"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import GameCard from "../components/gameCard";
import { Input } from "@heroui/react";

interface Game {
  name: string;
  image: string;
  rank: number;
  appid: number;
  peak_in_game: number;
  id?: number;
  peak?: number;
}

const MostPlayedGames: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [search, setSearch] = useState("");

  // Fetch the top games list
  useEffect(() => {
    async function fetchGames() {
      try {
        const res = await fetch("http://localhost:8080/api/steam/top-games");
        if (!res.ok) {
          throw new Error("Failed to fetch games");
        }
        const data: Game[] = await res.json();
        // Add an "id" field and normalize "peak"
        const gamesWithId = data.map((game, index) => ({
          ...game,
          id: game.appId || index,
          peak: game.peak_in_game,
        }));
        setGames(gamesWithId);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    }
    fetchGames();
  }, []);

  // Filter games based on search input
  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(search)
  );

  // Separate the games: the first three as big cards and the rest as small cards.
  const bigGames = filteredGames.slice(0, 3);
  const smallGames = filteredGames.slice(3);

  return (
    <div className="min-h-screen min-w-80vw flex flex-col p-4 ml-0 md:ml-[2.4rem]">
      <div className="flex justify-between items-center mb-8 min-w-80vw">
        <h1 className="text-4xl font-bold text-center">Most Played Games</h1>
        <Input
          label="Search"
          className="w-72 justify-self-end"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>

      <div className="flex-grow flex flex-col ">
        {filteredGames.length > 0 ? (
          <div className="min-h-[60vh] flex flex-col">
            {/* Big cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {bigGames.map((game) => (
                <Link key={game.id} href={`/games/${game.appid}`} className="h-full w-full inline-block">
                  <GameCard game={game} isBigCard />
                </Link>
              ))}
            </div>

            {/* Small cards grid */}
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {smallGames.map((game) => (
                <Link key={game.id} href={`/games/${game.appid}`} className="h-full w-full inline-block">
                  <GameCard game={game} />
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-grow flex items-center justify-center min-h-[60vh]">
            <p className="text-gray-500">No games found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MostPlayedGames;
