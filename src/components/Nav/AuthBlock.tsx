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
import { ErrorBoundary } from "../../features/import/errorBoundary";
import { useRouter } from "next/navigation";

export const AuthBlock = () => {
  const router = useRouter();
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
            <DropdownMenuGroup>
              <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => {
                  router.push("/user-profile");
                }}
              >
                Mi Perfil
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Suspense fallback={null}>
                <ErrorBoundary>
                  <ImportImagesLink />
                </ErrorBoundary>
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
