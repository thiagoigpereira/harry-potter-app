"use client";
import { useEffect, useState } from "react";
import { fetchCharacters } from "../lib/api";
import CharacterCard from "../components/CharacterCard";
interface Character {
  id: string;
  name: string;
  house: string;
  image: string;
  hogwartsStudent: boolean;
}

export default function CharactersPage() {

  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const characters: Character[] = await fetchCharacters();
      setCharacters(characters);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Characters</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {characters.map((char) => (
          <CharacterCard key={char.id} id={char.id} name={char.name} image={char.image} house={char.house} />
        ))}
      </div>
    </div>
  );
}
