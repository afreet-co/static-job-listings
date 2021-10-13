import React, { FC } from "react";
import { useAppContext } from "../contexts/AppContext";

export const ListItem: FC<{ item: Job }> = ({
  item: {
    company,
    contract,
    featured,
    languages,
    level,
    location,
    logo,
    new: isNew,
    position,
    postedAt,
    role,
    tools,
  },
}) => {
  return (
    <div
      className={`w-full shadow-xl rounded ${
        featured && "border-l-4 border-solid border-de-saturated-cyan"
      } p-4 sm:p-8 flex sm:flex-row flex-col bg-white sm:space-x-8 sm:items-center`}
    >
      <img
        src={logo}
        alt={company}
        className="w-12 sm:w-20 h-12 sm:h-20 -mt-10 sm:mt-0 mb-2 sm:mb-0"
      />
      <div className="flex flex-col space-y-1 flex-1 border-b border-solid border-grayish-cyan sm:border-0">
        <div className="flex space-x-4 ">
          <h4 className="text-de-saturated-cyan font-bold sm:text-base text-sm">
            {company}
          </h4>
          <div className="flex space-x-2">
            {isNew && (
              <div className="bg-de-saturated-cyan flex items-center justify-center leading-none rounded-full text-xss px-2 font-bold text-white">
                NEW!
              </div>
            )}
            {featured && (
              <div className="bg-grayish-cyan-dark flex items-center justify-center leading-none rounded-full text-xss px-2 font-bold text-white">
                FEATURED
              </div>
            )}
          </div>
        </div>
        <h5 className="sm:text-lg text-base font-bold text-grayish-cyan-dark cursor-pointer hover:text-de-saturated-cyan">
          {position}
        </h5>
        <div className="flex items-center text-grayish-cyan justify-start space-x-2 sm:space-x-4 pb-4 sm:pb-0">
          <span className="text-sm">{postedAt}</span>
          <div className="h-1 w-1 bg-grayish-cyan rounded-full"></div>
          <span className="text-sm">{contract}</span>
          <div className="h-1 w-1 bg-grayish-cyan rounded-full"></div>
          <span className="text-sm">{location}</span>
        </div>
      </div>
      <div className="flex-1 items-center flex sm:space-x-4 flex-wrap sm:flex-nowrap justify-start sm:justify-end">
        <JobChip text={role} />
        <JobChip text={level} />
        {languages.map((language) => (
          <JobChip key={language} text={language} />
        ))}

        {tools.map((tool) => (
          <JobChip key={tool} text={tool} />
        ))}
      </div>
    </div>
  );
};

export const JobChip: FC<{ text: string }> = ({ text }) => {
  const { addFilter } = useAppContext();
  return (
    <button
      onClick={() => addFilter(text)}
      className="p-2 rounded bg-background text-de-saturated-cyan text-xs font-bold mt-4 sm:mt-0 mr-4 sm:mr-0 hover:bg-de-saturated-cyan hover:text-background transition-all duration-150"
    >
      {text}
    </button>
  );
};
