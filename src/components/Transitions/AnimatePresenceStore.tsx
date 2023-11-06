import { useContext, useRef } from "react";
import { StoreApi, create } from "zustand";
import { createContext } from "zustand-utils";

type State = {
  renderedKeys: Set<string>;
  indexNumber: Map<string, number>;
  actions: {
    registerKey: (key: string) => number;
  };
};

const { Provider, useStore } = createContext<StoreApi<State>>();

const createStore = () =>
  create<State>((set, get) => ({
    renderedKeys: new Set(),
    indexNumber: new Map(),
    actions: {
      registerKey: (key: string) => {
        let newIndex = get().renderedKeys.size + 1;
        set((state) => {
          state.renderedKeys.add(key);
          state.indexNumber.set(key, newIndex);
          state.renderedKeys.has(key);
          return {
            index: newIndex,
            renderedKeys: new Set(state.renderedKeys).add(key),
            indexNumber: new Map(state.indexNumber).set(key, newIndex),
          };
        });
        return newIndex;
      },
    },
  }));

export const AnimatePresenceStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storeRef = useRef(createStore);
  return <Provider createStore={storeRef.current}>{children}</Provider>;
};

export const useAnimatePresenceStore = useStore;
