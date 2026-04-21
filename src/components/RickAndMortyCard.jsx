const RickAndMortyCard = ({ character }) => {
  return (
    <article className="group mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/40 bg-white/65 shadow-lg">
      <div className="flex h-72 items-center justify-center rounded-b-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(200,255,200,0.95),rgba(214,249,255,0.78)_75%)]">
        <img
          className="h-full w-full object-contain transition-all duration-300 group-hover:scale-105"
          src={character.image}
          alt={character.name}
          loading="lazy"
        />
      </div>
      <div className="space-y-3 p-4 text-left">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-semibold leading-tight text-gray-900">
            {character.name}
          </h2>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${
            character.status === 'Alive' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {character.status}
          </span>
        </div>
        
        <div className="grid gap-2 text-sm text-slate-600">
          <p className="rounded-full bg-slate-100/75 px-3 py-2">
            <span className="font-bold text-slate-800">Species:</span> {character.species}
          </p>
          <p className="rounded-full bg-slate-100/75 px-3 py-2">
            <span className="font-bold text-slate-800">Gender:</span> {character.gender}
          </p>
          <p className="rounded-full bg-slate-100/75 px-3 py-2">
            <span className="font-bold text-slate-800">Origin:</span> {character.origin.name}
          </p>
          <p className="rounded-full bg-slate-100/75 px-3 py-2">
            <span className="font-bold text-slate-800">Location:</span> {character.location.name}
          </p>
        </div>
      </div>
    </article>
  );
};

export default RickAndMortyCard;