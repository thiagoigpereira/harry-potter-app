"use client"; // Needed for event handling in Next.js app directory

import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "../context/FavoritesContext";

interface CharacterProps {
  id: string;
  name: string;
  image: string;
  house?: string;
}

export default function CharacterCard({ id, name, image, house }: CharacterProps) {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className={`border border-parchment border-${house?.toLowerCase()}  bg-darkMagic p-4 rounded-lg shadow-magic transition transform hover:scale-105`}>
      <Image
        src={image || "/placeholder.jpg"}
        alt={name}
        width={500}
        height={500}
        className="w-full h-auto rounded-lg"
      />
      <h2 className="text-lg font-bold mt-4 text-hufflepuff text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500 mt-1">{house || "No House"}</p>
      <div className="mt-4 flex flex-row gap-2">

        <button
          onClick={() => toggleFavorite(id)}
          className={`px-4 py-2 rounded-lg transition font-medium ${favorites.includes(id)
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-gray-300 text-gray-800 hover:bg-gray-400"
            }`}
        >
          {favorites.includes(id) ? "Unfavorite ❤️" : "Favorite 🤍"}
        </button>


        <Link href={`/characters/${id}`}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
