import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { search, setSearch } = useAppContext();
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </nav>
  );
};

export default Navbar;
