import { notFound } from "next/navigation";
import ScreenshotCarousel from "../../components/screenshotCarousel";
import PeakPlayersChart from "../../components/peakPlayersChart";

// Because this page is a Server Component (default in Next.js 13+),
// we can do server-side fetches. We pass data to a client component
// for the actual chart rendering.

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

// Interface for the raw data returned by the backend
interface RawPeakDataPoint {
  timestamp: number;
  peak: number;
}

// Final data interface for the chart
interface PeakDataPoint {
  date: string; // formatted as "26 Feb"
  peak: number;
}

export default async function GameDetailPage({
  params,
}: {
  params: { appId: number };
}) {
  const { appId } = params;

  // 1. Fetch game details from your existing endpoint
  const detailRes = await fetch(`http://localhost:8080/api/steam/games/${appId}`, {
    cache: "no-store",
  });

  if (!detailRes.ok) {
    return notFound();
  }

  const gameDetails: GameDetails = await detailRes.json();

  // 2. Fetch the last 30 days of peak data from your new "peak-history" endpoint
  const historyRes = await fetch(
    `http://localhost:8080/api/steam/games/${appId}/peak-history?days=30`,
    { cache: "no-store" }
  );

  let rawPeakData: RawPeakDataPoint[] = [];
  if (historyRes.ok) {
    rawPeakData = await historyRes.json();
  }

  // Sort by timestamp ascending and transform each into { date, peak }
  rawPeakData.sort((a, b) => a.timestamp - b.timestamp);
  const peakData: PeakDataPoint[] = rawPeakData.map((item) => {
    const dateObj = new Date(item.timestamp);
    // Format date as "DD MMM" (e.g., "26 Feb")
    const dateStr = dateObj.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    });
    return { date: dateStr, peak: item.peak };
  });

  // 3. Render the page
  return (
    <div className="w-screen">
      <main className="min-h-screen flex items-center justify-center p-6">
        <article className="bg-gray-700/15 rounded-xl shadow-lg overflow-hidden max-w-3xl w-full">
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
            <p className="text-lg mb-4">{gameDetails.short_description}</p>

            <div className="mb-6">
              <span className="text-purple-400 font-semibold">Peak Players: </span>
              <span>{gameDetails.peak_in_game.toLocaleString()} players</span>
            </div>

            {/* --- New: Graph of Last 30 Days' Peak Players --- */}
            <div className="mb-8">
              {peakData && peakData.length > 0 ? (
                <PeakPlayersChart dataPoints={peakData} />
              ) : (
                <p>No historical peak data found.</p>
              )}
            </div>

            {/* Screenshots Carousel */}
            {gameDetails.screenshots && gameDetails.screenshots.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
                <ScreenshotCarousel screenshots={gameDetails.screenshots} />
              </div>
            )}
          </section>
        </article>
      </main>
    </div>
  );
}
