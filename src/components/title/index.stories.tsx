import React from "react";

import { Title, hTypes } from "./index";
import styles from "./index.module.scss";

import "../../styles/index.scss";

export default {
  title: "Title",
  component: Title
};

export const h1 = () => (
  <div className={styles.storybookContainer}>
    <Title type={hTypes.h1}>H1 title</Title>
  </div>
);

export const h4 = () => (
  <div className={styles.storybookContainer}>
    <Title type={hTypes.h4}>H4 title</Title>
  </div>
);

export const MediumStyle = () => (
  <div className={styles.storybookContainer}>
    <Title type={hTypes.h1} bold={false}>
      H1 medium title
    </Title>
  </div>
);
