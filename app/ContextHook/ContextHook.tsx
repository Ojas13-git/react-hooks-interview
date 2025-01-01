"use client"
import React, { createContext } from "react";
import MainComponent from "../components/MainComponent";

export const LoginContext = createContext(false);

const ContextHook = () => {
  return (
    <LoginContext value={true}>
      <div>
        <MainComponent />
      </div>
    </LoginContext>
  );
};

export default ContextHook;
