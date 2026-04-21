import { useState, useEffect } from "react"; // importar hooks de React para manejar estado y efectos secundarios
import DragonBallCard from "../components/DragonBallCard"; // importar el componente DragonBallCard para mostrar cada personaje

const DragonBall = () => {
  const apiUrl = "https://dragonball-api.com/api/characters"; // url de la api
  const [characters, setCharacters] = useState([]); // estado para almacenar los datos de personajes
  const [loading, setLoading] = useState(true); // estado para controlar la carga de datos

  // función para obtener los datos de la API
  const fetchCharacters = async () => {
    try {
      const response = await fetch(apiUrl); // hacer la solicitud a la API
      const data = await response.json(); // convertir la respuesta a JSON
      setCharacters(Array.isArray(data.items) ? data.items : []); // actualizar el estado con los datos obtenidos
    } catch (error) {
      console.error("Error fetching characters:", error); // manejar errores
    } finally {
      setLoading(false); // asegurar que la carga se detenga en caso de error
    }
  };

  useEffect(() => {
    fetchCharacters(); // llamar a la función para obtener los datos cuando el componente se monte
  }, []); // el array vacío asegura que se ejecute solo una vez al montar el componente

  return (
    <div>
      <h1 className="text-center text-2xl">Personajes</h1>
      {loading ? (
        <p className="text-center">Cargando...</p> // mostrar mensaje de carga mientras se obtienen los datos
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {characters.map((character) => (
            <DragonBallCard key={character.id} character={character} />
            // renderizar un componente DragonBallCard para cada personaje
          ))}
        </div>
      )}
    </div>
  );
};

export default DragonBall; // exportar el componente para su uso en otras partes de la aplicacion
