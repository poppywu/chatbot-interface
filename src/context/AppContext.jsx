import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
  const [page, setPage] = useState("apps");
  const [search, setSearch] = useState("");
  const [showChatbot, setShowChatbot] = useState(false);
  return (
    <AppContext.Provider
      value={{ page, search, setPage, setSearch, showChatbot, setShowChatbot }}
    >
      {children}
    </AppContext.Provider>
  );
};
