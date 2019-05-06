import React from "react";
import Routes from "./routes.js";
import { StatusBar } from "react-native";

const src = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
    <Routes />
  </>
);

export default src;
