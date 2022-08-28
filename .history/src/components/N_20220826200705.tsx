import React from "react";

type valProps = {
  state: string[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
  value: string[];
};

export const N = ({ state, setState, value }: valProps) => {
  const handle = (e: React.FormEvent<HTMLOptionElement>) => {
    console.log(e);
  };
  return (
    <div>
      {
        <>
          <select>
            {value.map((index, item) => {
              return <option onChange={(e) => handle(e)}>{index}</option>;
            })}
          </select>
        </>
      }
    </div>
  );
};
