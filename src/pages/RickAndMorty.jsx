import { useState, useEffect } from "react";
import RickAndMortyCard from "../components/RickAndMortyCard";

// BORRA LA LÍNEA QUE DECÍA: import { rickAndMortyData } from "../assets/data/rickandmorty";

const RickAndMorty = () => {
  const apiUrl = "https://rickandmortyapi.com/api/character"; 
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCharacters(data.results || []); 
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-8">Personajes Rick & Morty</h1>
      {loading ? (
        <p className="text-center">Cargando dimensiones...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {characters.map((character) => (
            <RickAndMortyCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RickAndMorty;