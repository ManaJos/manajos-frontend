import { notFound } from "next/navigation";
import ScreenshotCarousel from "../../components/screenshotCarousel";

interface GameDetails {
  type: string;
  name: string;
  steam_appid: number;
  short_description: string;
  header_image: string;
  peak_in_game: number;
  price_overview: any;
  screenshots: {
    id: number;
    path_full: string;
  }[];
}

export default async function GameDetailPage({
  params,
}: {
  params: { appId: number };
}) {
  const { appId } = params;

  // Fetch game details from the backend API
  const res = await fetch(
    `http://localhost:8080/api/steam/games/${appId}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return notFound();
  }

  const gameDetails: GameDetails = await res.json();

  return (
    <main className="min-h-screen flex items-center justify-center p-6 pl-80">
      <article className="bg-gray-800 rounded-xl shadow-lg overflow-hidden max-w-3xl w-full">
        {/* Header Section */}
        <header className="relative">
          <img
            src={gameDetails.header_image}
            alt={gameDetails.name}
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
              {gameDetails.name}
            </h1>
          </div>
        </header>

        {/* Details Section */}
        <section className="p-6">
          <p className="text-gray-300 text-lg mb-4">
            {gameDetails.short_description}
          </p>
          <div className="mb-6">
            <span className="text-purple-400 font-semibold">
              Peak Players:{" "}
            </span>
            <span className="text-purple-200">
              {gameDetails.peak_in_game.toLocaleString()} players
            </span>
          </div>

          {/* Screenshots Carousel */}
          {gameDetails.screenshots && gameDetails.screenshots.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Screenshots
              </h2>
              <ScreenshotCarousel screenshots={gameDetails.screenshots} />
            </div>
          )}
        </section>
      </article>
    </main>
  );
}
