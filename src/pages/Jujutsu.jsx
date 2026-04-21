import { useState, useEffect } from "react";
import JujutsuCard from "../components/JujutsuCard";

const Jujutsu = () => {
  const apiUrl = "https://api.jikan.moe/v4/anime/40748/characters"; 
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      if (data.data) {
        // LISTA DE PERSONAJES DESEADOS
        const favoritos = ["Maki Zenin", "Naoya Zenin", "Yuta Okkotsu", "Suguru Geto"];
        
        // Filtramos el array original para que solo incluya los de nuestra lista
        const filtrados = data.data.filter(item => 
          favoritos.some(nome => item.character.name.includes(nome.split(' ')[0])) 
          || favoritos.includes(item.character.name)
        );

        setCharacters(filtrados);
      }
    } catch (error) {
      console.error("Error fetching JJK characters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="bg-slate-100 min-h-screen">
      <h1 className="text-center text-4xl font-black py-10 text-black uppercase tracking-tighter">
        Grado Especial: Hechiceros Seleccionados
      </h1>
      {loading ? (
        <p className="text-center font-mono animate-pulse">Invocando energía maldita...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-full mx-auto">
          {characters.map((item) => (
            <JujutsuCard 
              key={item.character.mal_id} 
              character={item.character} 
              role={item.role} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Jujutsu;