"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { User } from "@supabase/supabase-js";
import cookies from "js-cookie";
import { COOKIE_NAME, getCookieOptions, supabaseClient } from "./client";

export type AuthContextType = {
  user: User | null;
  isLogged: boolean;
  isReady: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLogged: false,
  isReady: false,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const isLogged = !!user?.id;
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      const { data } = await supabaseClient.auth.getSession();
      if (data?.session) {
        setUser(data?.session?.user ?? null);
        const accessToken = data?.session?.access_token ?? null;
        cookies.set(COOKIE_NAME, accessToken, getCookieOptions());
      }
      setIsReady(true);
    };

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      const access_token = session?.access_token ?? null;

      if (!access_token) {
        cookies.remove(COOKIE_NAME);
      } else {
        cookies.set(COOKIE_NAME, access_token, getCookieOptions());
      }
      setUser(session?.user ?? null);
    });

    initialize().catch(console.error);
    return () => subscription.unsubscribe();
  }, []);

  const value = useMemo(
    () => ({ user, isLogged, isReady }),
    [user, isLogged, isReady],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useUser = () => useContext(AuthContext).user;

export const useIsLoggedIn = () => useContext(AuthContext).isLogged;
export const useIsAuthReady = () => useContext(AuthContext).isReady;
