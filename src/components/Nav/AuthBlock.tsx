"use client";
import { SignedIn, SignOutButton } from "@clerk/clerk-react";
import { User2 } from "lucide-react";
import React, { Suspense } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ImportImagesLink } from "./ImportImagesLink";

export const AuthBlock = () => {
  return (
    <div className="min-w-[4rem] flex justify-end">
      <SignedIn>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost">
              <User2 />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Suspense fallback={null}>
                <ImportImagesLink />
              </Suspense>
              <SignOutButton>
                <DropdownMenuItem className="cursor-pointer">
                  Salir
                </DropdownMenuItem>
              </SignOutButton>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SignedIn>
    </div>
  );
};
