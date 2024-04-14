"use client";
import { User2, LogInIcon } from "lucide-react";
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
import { useIsAuthReady, useIsLoggedIn } from "../../lib/supabase/AuthProvider";
import Link from "next/link";
import { logout } from "../../lib/supabase/client";

const SignedInBlock = () => {
  const isLoggedIn = useIsLoggedIn();
  if (!isLoggedIn) {
    return (
      <Button variant="outline" asChild>
        <Link href="/login">
          <LogInIcon />
        </Link>
      </Button>
    );
  }
  return (
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
          <Suspense fallback={null}>
            <ErrorBoundary>
              <ImportImagesLink />
            </ErrorBoundary>
          </Suspense>
          <DropdownMenuItem onClick={logout} className="cursor-pointer">
            Salir
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const AuthBlock = () => {
  const isAuthReady = useIsAuthReady();
  return (
    <div className="min-w-[4rem] flex justify-end">
      {isAuthReady && <SignedInBlock />}
    </div>
  );
};
