import React from "react";
import Navigation from "./src/config/Navigation";
import { ConversionProvider } from "./src/context/ConversionContext";

export default () => {
  return (
    <ConversionProvider>
      <Navigation />
    </ConversionProvider>
  );
};
