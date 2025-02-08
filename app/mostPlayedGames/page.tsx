"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import GameCard from "../components/gameCard";

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
          id: game.appid || index,
          peak: game.peak_in_game,
        }));
        setGames(gamesWithId);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    }
    fetchGames();
  }, []);

  // Once games are loaded, prefetch individual game details in ranked order
  

  // Separate the games: the first three as big cards and the rest as small cards.
  const bigGames = games.slice(0, 3);
  const smallGames = games.slice(3);

  return (
    <div className="min-h-screen p-4 ml-0 md:ml-[2.4rem]">
      <h1 className="text-4xl font-bold text-center mb-8">Most Played Games</h1>

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
  );
};

export default MostPlayedGames;
