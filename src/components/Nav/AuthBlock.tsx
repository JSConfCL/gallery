"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/clerk-react";
import { User2 } from "lucide-react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <div className="w-10">
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
      <SignedOut>
        <SignInButton mode="modal" redirectUrl={pathname}>
          <Button variant="secondary">Ingresar</Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
};
