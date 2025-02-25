"use client";

import React from "react";

interface GameCardProps {
  game: {
    id: number;
    rank: number;
    name: string;
    peak: number;
    image: string;
  };
  // When true, the card will span extra columns/rows on larger screens.
  isBigCard?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ game, isBigCard = false }) => {
  // Define a common text shadow style.
  const textShadowStyle = { textShadow: "1px 1px 2px rgba(0,0,0,0.8)" };

  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-lg group border border-purple-900 transition-transform duration-300 hover:scale-[1.02] ${
        isBigCard ? "lg:col-span-2 lg:row-span-2 h-80" : "h-64"
      }`}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${game.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlay from bottom */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent opacity-100" />

      {/* Content container */}
      <div className="relative z-10 p-4 h-full flex flex-col justify-between">
        {/* Rank at the top left */}
        <div style={textShadowStyle} className="text-white font-bold text-xl">
          #{game.rank}
        </div>
        {/* Game name centered */}
        <div className="flex-grow flex items-center justify-center">
          <h2 style={textShadowStyle} className="text-white text-2xl font-bold text-center">
            {game.name}
          </h2>
        </div>
        {/* Player count at the bottom */}
        <div style={textShadowStyle} className="text-white text-lg text-center">
          {game.peak.toLocaleString()} players
        </div>
      </div>
    </div>
  );
};

export default GameCard;
