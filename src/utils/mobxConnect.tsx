import React, { useEffect, useState, useMemo } from 'react';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';

interface IConnectPramaters<T> {
  isGlobal?: boolean;
  Store: any;
  dependencies?: T;
}

function connect<T>({
  isGlobal = false,
  Store,
  dependencies,
}: IConnectPramaters<T>) {
  return (Element: any): any => {
    const ReturnComp = (props: any): any => {
      const router = useRouter();
      const OElement: any = observer(Element);
      const [store] = useState(
        isGlobal
          ? Store.getInstance({ ...dependencies, ...props.dependencies })
          : new Store({ ...dependencies, ...props.dependencies }),
      );
      useEffect(() => {
        return store.mount({
          router,
        });
      }, [store, router]);
      return <OElement {...props} store={store} />;
    };
    ReturnComp.displayName = 'DisplayName';
    return ReturnComp;
  };
}

export interface IStoreDependencies {}

class BaseStore {
  static instance: BaseStore;

  constructor(protected dependencies: IStoreDependencies) {}

  static getInstance(dependencies: IStoreDependencies): BaseStore {
    if (!this.instance) {
      this.instance = new BaseStore(dependencies);
    }
    return this.instance;
  }

  mount(params: any): void {
    //
  }
}

const useStore = (Store: any, initialState: any, deps: any = []): any => {
  const store = useMemo(() => {
    return new Store(initialState);
  }, [Store, initialState]);
  return store;
};

export { connect, BaseStore, useStore };
