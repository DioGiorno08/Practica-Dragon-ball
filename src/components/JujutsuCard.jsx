const JujutsuCard = ({ character, role }) => {
  return (
    <article className="group mx-auto w-full overflow-hidden rounded-xl border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
      <div className="flex h-96 items-center justify-center bg-gray-300 border-b-2 border-black overflow-hidden">
        <img
          className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          src={character.images?.jpg?.image_url} 
          alt={character.name}
        />
      </div>

      <div className="p-4 bg-white">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
            {role === "Main" ? "Grado Especial" : "Hechicero de Elite"}
          </span>
          <h2 className="text-2xl font-black text-black uppercase leading-none mb-2">
            {character.name}
          </h2>
        </div>

        <div className="pt-3 border-t-2 border-black flex justify-between items-center">
          <span className="text-[10px] font-bold text-white bg-black px-2 py-1">
            ID #{character.mal_id}
          </span>
          <p className="text-[10px] font-bold uppercase text-gray-400">Jujutsu High</p>
        </div>
      </div>
    </article>
  );
};

export default JujutsuCard;

//Los cambios xDDD