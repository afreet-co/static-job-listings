import { createContext, FC, useContext, useEffect, useState } from "react";
import { jobs } from "../data";

export type AppContextType = {
  jobItems: Job[];
  filters: string[];
  addFilter: (item: string) => void;
  removeFilter: (item: string) => void;
  clearFilters: () => void;
};

const initialValue: AppContextType = {
  filters: [],
  jobItems: [],
  addFilter: (string) => {},
  removeFilter: (string) => {},
  clearFilters: () => {},
};

export const AppContext = createContext<AppContextType>(initialValue);

export const AppContextProvider: FC = ({ children }) => {
  const [jobItems, setJobItems] = useState<Job[]>(jobs);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    if (filters.length === 0) {
      setJobItems(jobs);
    } else {
      const filteredJobItems = jobItems.reduce((prev, item) => {
        const searchableItems: string[] = [
          item.role,
          item.level,
          ...item.languages,
          ...item.tools,
        ];
        const isExists = filters.every((r) => searchableItems.includes(r));
        if (isExists) {
          return [...prev, item];
        } else {
          return prev;
        }
      }, []);

      setJobItems(filteredJobItems);
    }
  }, [filters]);

  const addFilter = (item: string) => {
    setFilters((prev) => [...new Set([...prev, item])]);
  };
  const removeFilter = (item: string) => {
    setFilters((prev) => prev.filter((i) => i !== item));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <AppContext.Provider
      value={{ filters, jobItems, addFilter, clearFilters, removeFilter }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
