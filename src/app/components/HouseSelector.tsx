"use client"; // Required for event handling

import { usePreferredHouse } from "../context/PreferredHouseContext";

const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

export default function HouseSelector() {
  const { preferredHouse, setPreferredHouse } = usePreferredHouse();
  console.log(preferredHouse);
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Select Your House</h2>
      <div className="flex gap-2">
        {houses.map((house) => (
          <button
            key={house}
            onClick={() => setPreferredHouse(house)}
            className={`px-4 py-2 rounded-lg transition font-medium ${preferredHouse === house ? "bg-green-500 text-white" : "bg-gray-300 text-gray-800"
              }`}
          >
            {house}
          </button>
        ))}
      </div>
      {preferredHouse && <p className="mt-2 text-sm">Selected House: {preferredHouse}</p>}
    </div>
  );
}
