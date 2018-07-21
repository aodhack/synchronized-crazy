import * as React from 'react';
import { Store } from "../store";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * global state (platform-specific function, etc)
 */
export interface StoreProps {
  store: Store;
}

type WithoutStore<T extends StoreProps> = Omit<T, keyof StoreProps>;

const StoreContext = React.createContext<Store>(null!);

export const StoreProvider = StoreContext.Provider;

export function connectStore<P extends StoreProps>(C: React.ComponentType<P>)
  : React.StatelessComponent<WithoutStore<P>> {
  return (props: WithoutStore<P> & { children?: React.ReactNode }) => (
    <StoreContext.Consumer>
      {(value: Store) => <C {...props} store={value}/>}
    </StoreContext.Consumer>
  );
}
