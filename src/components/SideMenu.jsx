import { useAppContext } from "../context/AppContext";

const SideMenu = () => {
  const { setPage } = useAppContext();
  return (
    <aside className="sidemenu">
      <button onClick={() => setPage("apps")}>Apps</button>
      <button onClick={() => setPage("documents")}>Documents</button>
    </aside>
  );
};

export default SideMenu;
