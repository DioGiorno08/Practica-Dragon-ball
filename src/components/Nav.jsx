import { Link } from "react-router";

function Nav() {
  return (
    <nav className="flex items-center justify-between border-b border-slate-200 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-900 text-white">
      <h2 className="m-0 text-lg font-semibold">React Fetching</h2>
      <div className="flex items-center gap-4 text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/dragon" className="hover:underline">Dragonball</Link>
        <Link to="/rickmorty" className="hover:underline">Rick & Morty</Link>
        <Link to="/jujutsu" className="hover:underline">Jujutsu Kaisen</Link>
      </div>
    </nav>
  );
}

export default Nav;