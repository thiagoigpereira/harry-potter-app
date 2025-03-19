import HouseSelector from "./components/HouseSelector";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold">Welcome to the Harry Potter App</h1>
      <HouseSelector />
      <p className="mt-4 text-lg text-gray-700">
        Explore characters, spells, and more from the Wizarding World!
      </p>
    </main>
  );
}
