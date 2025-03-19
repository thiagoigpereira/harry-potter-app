"use client";
import { useState, useEffect } from "react";
import { fetchCharacters } from "../lib/api";
import CharacterCard from "../components/CharacterCard";



interface Character {
  id: string;
  name: string;
  house: string;
  image: string;
  hogwartsStudent: boolean;
}

export default function StudentPage() {

  const [student, setStudent] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const characters: Character[] = await fetchCharacters();
      setStudent(characters.filter((char) => char.hogwartsStudent))
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Hogwarts Students</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {student.map((char) => (
          <CharacterCard key={char.id} id={char.id} name={char.name} image={char.image} house={char.house} />
        ))}
      </div>
    </div>
  );
}
