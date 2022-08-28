import React from "react";

type valProps = {
  state: string[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
  value: string[];
};

export const N = ({ state, setState, value }: valProps) => {
  return (
    <div>
      {
        <>
          {value.map((index, item) => {
            return (
              <select>
                <option>{index}</option>
              </select>
            );
            console.log(index);
          })}
        </>
      }
    </div>
  );
};
