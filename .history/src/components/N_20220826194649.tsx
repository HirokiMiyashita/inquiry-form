import React from "react";

type valProps = {
  input: string;
  inputState: React.Dispatch<React.SetStateAction<string>>;
  value: string[];
};

export const N = ({ input, inputState, value }: valProps) => {
  return <div>N</div>;
};
