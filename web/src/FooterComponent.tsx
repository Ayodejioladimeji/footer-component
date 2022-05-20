import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterInner from "./components/RouterInner";

type Props = {};

const FooterComponent = (props: Props) => {
  return (
    <BrowserRouter>
      <RouterInner />
    </BrowserRouter>
  );
};

export default FooterComponent;
