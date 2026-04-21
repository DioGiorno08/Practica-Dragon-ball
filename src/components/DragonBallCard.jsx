const DragonBallCard = ({ character }) => {
    // componente para mostrar la información de cada personaje
   
    return (
      // estructura del card con estilos de Tailwind CSS
      <article
        tabIndex={0} // hacer que el card sea accesible mediante teclado
        className="group mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/40 bg-white/65"
      >
        <div className="flex h-72 items-center justify-center rounded-b-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(255,248,216,0.95),rgba(237,243,255,0.78)_75%)]">
          <img
            className="h-full w-full rounded-2xl object-contain transition-all duration-300"
            src={character.image} // mostrar la imagen del personaje
            alt={character.name} // usar el nombre del personaje como texto alternativo para la imagen
            loading="lazy" // cargar la imagen de forma perezosa para mejorar el rendimiento
            onError={(event) => {
              // manejar errores de carga de la imagen
              event.currentTarget.src =
                "https://via.placeholder.com/420x420?text=Imagen+no+disponible";
            }}
          />
        </div>
        <div className="space-y-3 p-4 text-left">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-xl font-semibold leading-tight text-gray-900">
              {character.name}
            </h2>
            <span className="rounded-full bg-amber-100/80 px-3 py-1 text-xs font-semibold text-amber-800 backdrop-blur-sm transition-all duration-300 hover:bg-amber-200/90">
              {character.race}
            </span>
          </div>
          <p className="text-sm text-slate-600">
            {character.description || "Sin descripcion disponible."}
          </p>
          <div className="grid gap-2 text-sm text-slate-600">
            <p className="rounded-full bg-slate-100/75 px-3 py-2">
              <span className="font-bold text-slate-800">Race:</span>{" "}
              {character.race}
            </p>
            <p className="rounded-full bg-slate-100/75 px-3 py-2">
              <span className="font-bold text-slate-800">Gender:</span>{" "}
              {character.gender}
            </p>
            <p className="rounded-full bg-slate-100/75 px-3 py-2">
              <span className="font-bold text-slate-800">Ki:</span> {character.ki}
            </p>
            <p className="rounded-full bg-slate-100/75 px-3 py-2">
              <span className="font-bold text-slate-800">Max Ki:</span>{" "}
              {character.maxKi}
            </p>
            <p className="rounded-full bg-slate-100/75 px-3 py-2">
              <span className="font-bold text-slate-800">Affiliation:</span>{" "}
              {character.affiliation}
            </p>
          </div>
        </div>
      </article>
    );
  };
   
  export default DragonBallCard; //exportar el componente para su uso en otras partes de la aplicacion
   
   