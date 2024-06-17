"use client";
import { useState, createContext, RefObject } from "react";

interface ContextValue {
  element: null | HTMLDivElement;
  getElement: (ele: HTMLDivElement) => void;
}

export const ElementContext = createContext<ContextValue>({
  element: null,
  getElement: () => {},
});

const ElementProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [element, setElement] = useState<null | HTMLDivElement>(null);

  const getElement = (ele: HTMLDivElement) => {
    setElement(ele);
  };

  const contextValue: ContextValue = {
    element,
    getElement,
  };

  return (
    <ElementContext.Provider value={contextValue}>
      {children}
    </ElementContext.Provider>
  );
};

export default ElementProvider;
