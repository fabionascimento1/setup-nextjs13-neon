"use client";
import React, { createContext } from "react";

export const myContext = createContext("oii");

export function MyContextProvider({ children }: { children: React.ReactNode }) {
  return <myContext.Provider value="oi">{children}</myContext.Provider>;
}
