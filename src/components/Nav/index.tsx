import React from "react";
import { AuthBlock } from "./AuthBlock";
import Link from "next/link";
import JSChileLogo from "../Icons/JSChileLogo";

export const Nav = () => {
  return (
    <div className="h-20 flex flex-row justify-between items-center px-4 gap-8 border-b border-b-gray-600">
      <Link href="/">
        <JSChileLogo color="#fff" size={50} />
      </Link>
      <div className="flex flex-1 justify-center">
        <p className="text-md md:text-lg font-bold">
          JavaScript Chile — Galería
        </p>
        {/* <Input placeholder="Busca tu evento" className="max-w-lg" /> */}
      </div>
      <AuthBlock />
    </div>
  );
};
