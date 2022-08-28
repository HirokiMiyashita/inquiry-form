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
          <select>
            {value.map((index, item) => {
              return <option>{index}</option>;
              console.log(index);
            })}
          </select>
        </>
      }
    </div>
  );
};
