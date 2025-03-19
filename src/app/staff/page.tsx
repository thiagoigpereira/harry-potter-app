"use client";
import { useState, useEffect } from "react";
import { fetchCharacters } from "../lib/api";
import CharacterCard from "../components/CharacterCard";


interface Character {
  id: string;
  name: string;
  house: string;
  image: string;
  hogwartsStaff: boolean;
}

export default function StaffPage() {

  const [staff, setStaff] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const characters: Character[] = await fetchCharacters();
      setStaff(characters.filter((char) => char.hogwartsStaff))
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Hogwarts Staff</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {staff.map((char) => (
          <CharacterCard key={char.id} id={char.id} name={char.name} image={char.image} house={char.house} />
        ))}
      </div>
    </div>
  );
}
