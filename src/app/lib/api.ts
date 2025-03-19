export async function fetchCharacters() {
  const res = await fetch("https://hp-api.onrender.com/api/characters");
  if (!res.ok) throw new Error("Failed to fetch characters");
  return res.json();
}
