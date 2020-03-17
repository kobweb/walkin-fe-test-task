import React from "react";

import { CardWithTitle } from "./index";

import "../../styles/index.scss";

export default {
  title: "Card With Title",
  component: CardWithTitle
};

export const CardWithTextTitle = () => (
  <CardWithTitle renderTitle={() => "Card Title"}>
    Common card text
  </CardWithTitle>
);

export const CardWithCustomTitle = () => {
  const renderTitle = () => (
    <React.Fragment>
      <span style={{ color: "green" }}>Custom</span> Card Title
    </React.Fragment>
  );
  return (
    <CardWithTitle renderTitle={renderTitle}>Common card text</CardWithTitle>
  );
};
