import React, { FC } from "react";
import { useAppContext } from "../contexts/AppContext";
import { Remove } from "./icons/Remove";

export const FilterBar = () => {
  const { filters, clearFilters, removeFilter } = useAppContext();

  return (
    <div
      className={`w-full shadow-xl rounded py-4 px-4 sm:px-10 ${
        filters.length > 0 ? "flex" : "hidden"
      }  justify-between bg-white items-center -mt-20 mb-10 transition-all duration-150`}
    >
      <div className="flex flex-wrap sm:space-x-4">
        {filters.map((text) => (
          <FilterButton
            key={text}
            text={text}
            onClick={() => removeFilter(text)}
          />
        ))}
      </div>
      <div>
        <button
          className="text-de-saturated-cyan hover:underline transition-all duration-150 cursor-pointer text-sm font-bold "
          onClick={clearFilters}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export const FilterButton: FC<{ text: string; onClick: () => void }> = ({
  onClick,
  text,
}) => {
  return (
    <div className="flex my-2 sm:my-0 mx-2 sm:mx-0">
      <div className="p-2 rounded-l bg-background text-de-saturated-cyan text-xs font-bold">
        {text}
      </div>
      <button
        className="bg-de-saturated-cyan p-2 rounded-r hover:bg-grayish-cyan-dark"
        onClick={onClick}
      >
        <Remove />
      </button>
    </div>
  );
};
