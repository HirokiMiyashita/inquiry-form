import React from "react";

type valProps = {
  state: string[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
  value: string[];
};

export const N = ({ state, setState, value }: valProps) => {
  const handleChange = () => {};
  return (
    <div>
      <select>
        {value.map((index, item) => {
          return (
            <option key={item} onChange={handle}>
              {index}
            </option>
          );
        })}
      </select>
    </div>
  );
};
