"use client";
import { useEffect, useRef } from "react";
import { StoreApi, create } from "zustand";
import { createContext } from "zustand-utils";

type State = {
  originalPushState?: History["pushState"];
  actions: {
    addListener: (listener: (url: string) => void) => void;
    removeListener: (listener: (url: string) => void) => void;
    shallowNavigate: (newURL: string, params?: Record<string, string>) => void;
  };
};

const { Provider, useStore } = createContext<StoreApi<State>>();

const createStore = () =>
  create<State>(() => {
    const listenerStore = new Set<(url: string) => void>();
    return {
      originalPushState:
        typeof window === "undefined" ? undefined : window.history.pushState,
      actions: {
        addListener: (listener: (url: string) => void) => {
          listenerStore.add(listener);
        },
        removeListener: (listener: (url: string) => void) => {
          listenerStore.delete(listener);
        },
        shallowNavigate: (newURL, params = {}) => {
          window.history.pushState(
            {},
            undefined,
            newURL + "?" + new URLSearchParams(params).toString(),
          );
          Array.from(listenerStore).forEach((listener) => {
            listener(newURL);
          });
        },
      },
    };
  });

export const ShallowRoutingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storeRef = useRef(createStore);
  return <Provider createStore={storeRef.current}>{children}</Provider>;
};

export const useAnimatePresenceStore = useStore;

export const useRegisterRouteListener = (callback: (url: string) => void) => {
  const { actions } = useAnimatePresenceStore();
  let callbackRef = useRef(callback);
  // const { actions } = useContext(AnimatePresenceStoreContext);
  useEffect(() => {
    actions.addListener(() => {
      callbackRef.current(window.location.href);
    });
    return () => {
      actions.removeListener(callbackRef.current);
    };
  }, [actions]);
};
