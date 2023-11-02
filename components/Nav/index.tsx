import React from "react";
import Logo from "../Icons/Logo";
import { Input } from "../ui/input";

export const Nav = () => {
  return (
    <div className="h-20 flex flex-row justify-between items-center px-4 gap-8 border-b border-b-gray-600">
      <div>
        <Logo width={36} height={36} />
      </div>
      <div className="flex flex-1 justify-center items-center">
        <Input placeholder="Busca tu evento" className="max-w-lg" />
      </div>
      <div>{/* TODO: AUTH */}</div>
    </div>
  );
};
