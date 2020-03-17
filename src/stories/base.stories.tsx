import React from "react";

import { App as AppComponent } from "../app";

import "../styles/index.scss";

export default {
  title: "Base Components",
  component: AppComponent
};

export const App = () => <AppComponent />;
