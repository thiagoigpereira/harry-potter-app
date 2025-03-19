import { fetchCharacters } from "../../lib/api";

export default async function CharacterPage({ params }: { params: { id: string } }) {
  const characters = await fetchCharacters(); // Fetch all characters
  const character = characters.find((c) => c.id === params.id); // Find character by ID

  if (!character) {
    return <p className="text-center text-red-500">Character not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{character.name}</h1>
      <p className="text-lg text-gray-600">{character.house || "No House"}</p>
      <img src={character.image || "/placeholder.jpg"} alt={character.name} className="w-full max-w-md mx-auto rounded-lg mt-4" />
      <p className="mt-4"><strong>Actor:</strong> {character.actor || "Unknown"}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Birth Year:</strong> {character.yearOfBirth || "Unknown"}</p>
    </div>
  );
}
