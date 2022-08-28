import React from "react";

type valProps = {
  state: string[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
  value: string[];
};

export const N = ({ state, setState, value }: valProps) => {
  const handleChange = () => {
    setState(state);
  };
  return (
    <div>
      <select onChange={handleChange}>
        {value.map((index, item) => {
          return <option key={item}>{index}</option>;
        })}
      </select>
    </div>
  );
};
