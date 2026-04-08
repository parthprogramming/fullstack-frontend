import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useNotification } from "./notificationContext";

const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const { showNotification } = useNotification();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await result.json();

        setTodoList(data);
        // showNotification("Data fetched successfully");
      } catch (error) {
        showNotification("Failed to fetch data", "error");
      }
    };
    getData();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        todoList,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

export default useStore;

