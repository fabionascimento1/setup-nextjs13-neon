"use client";
import { myContext } from "@/contexts/my-context";
import { useContext } from "react";

export default function TesteContext() {
  const test = useContext(myContext);
  return <>{test}</>;
}
