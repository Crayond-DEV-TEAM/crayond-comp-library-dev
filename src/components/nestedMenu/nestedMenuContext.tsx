import React, { createContext, useContext, useEffect, useState } from "react"; 
import { NestedMenuProps } from "./nestedMenu";
import { NestedMenuConfiguration } from "./nestedMenu.Types";
 
interface OpenMenuState {
  key: string;
  target: Element;
}

const createStore = ({
  configuration,
  onClose,
  open
}: NestedMenuContextProviderProps) => {
  const [openMenus, setOpenMenus] = useState<OpenMenuState[]>([]);

  useEffect(() => {
    if (!open) {
      setOpenMenus([]);
    }
  }, [open]);

  const openMenu = (key: string, target: Element) => {
    setOpenMenus((openMenus) => {
      const openMenusCopy = [...openMenus];
      openMenusCopy.push({
        key: key,
        target: target
      });
      return openMenusCopy;
    });
  };

  /**
   * Find the parent configuration of a sub menu item
   * @param key
   * @param configuration
   */
  const findParent = (
    key: string,
    configuration: NestedMenuConfiguration[]
  ): NestedMenuConfiguration | undefined => {
    let parent: NestedMenuConfiguration | undefined = undefined;
    for (const config of configuration) {
      if (config.subMenu) {
        const isPartOf = config.subMenu.some(
          (subMenuConfig) => subMenuConfig.key === key
        );
        if (isPartOf) {
          return config;
        }
        parent = findParent(key, config.subMenu);
      }
    }
    return parent;
  };

  /**
   * Closes a menu of a specific key. If parent is true, the parent will be closed instead of the current menu.
   * @param key
   * @param parent
   */
  const closeMenu = (key: string, parent: boolean = false) => {
    let index: number | undefined = undefined;
    if (parent) {
      const parentConfig = findParent(key, configuration);
      if (parentConfig) {
        index = openMenus.findIndex(
          (openMenu) => openMenu.key === parentConfig.key
        );
      }
    } else {
      index = openMenus.findIndex((openMenu) => openMenu.key === key);
    }

    if (typeof index === "undefined" || index === -1) {
      return;
    }

    setOpenMenus((openMenus) => {
      const openMenusCopy = [...openMenus];
      openMenusCopy.splice(index!, openMenusCopy.length - index!);
      return openMenusCopy;
    });
  };

  const findOpenMenu = (key: string) => {
    return openMenus.find((openMenu) => openMenu.key === key);
  };

  const closeAllMenus = (
    event: {},
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    setOpenMenus([]);
    if (typeof onClose === "function") {
      onClose(event, reason);
    }
  };

  return {
    openMenu,
    closeMenu,
    closeAllMenus,
    findOpenMenu,
    findParent
  };
};

export interface NestedMenuContextProviderProps extends NestedMenuProps {
  children: React.ReactNode;
}

export type NestedMenuContextType = ReturnType<typeof createStore>;
const NestedMenuContext = createContext<NestedMenuContextType>({} as any);

const NestedMenuContextProvider: React.FunctionComponent<NestedMenuContextProviderProps> = (
  props
) => {
  const store = createStore(props);
  const { children } = props;

  console.log("render context");
  return (
    <NestedMenuContext.Provider value={store}>
      {children}
    </NestedMenuContext.Provider>
  );
};

const useNestedMenuContext = () => {
  const context = useContext(NestedMenuContext);
  if (!context) {
    throw new Error("NestedMenuContext could not be found");
  }
  return context;
};

export { NestedMenuContextProvider, useNestedMenuContext };
