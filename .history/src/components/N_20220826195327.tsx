import React from "react";

type valProps = {
  state: string[];
  inputState: React.Dispatch<React.SetStateAction<string>>;
  value: string[];
};

export const N = ({ state, inputState, value }: valProps) => {
  return <div>N</div>;
};
