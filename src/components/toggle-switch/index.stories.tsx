import React, { useState } from "react";
import { action } from "@storybook/addon-actions";

import { ToggleSwitch } from "./index";
import styles from "./index.module.scss";

import "../../styles/index.scss";

export default {
  title: "Switch",
  component: ToggleSwitch
};

export const Default = () => {
  const [switchChecked, setSwitchChecked] = useState(false);

  return (
    <div className={styles.storybookContainer}>
      <div className={styles.storybookTitle}>Switch control:</div>
      <ToggleSwitch
        checked={switchChecked}
        onChange={() => {
          action(`Checked: ${switchChecked}`)();
          setSwitchChecked(!switchChecked);
        }}
      />
    </div>
  );
};

export const Checked = () => {
  const [switchChecked, setSwitchChecked] = useState(true);

  return (
    <div className={styles.storybookContainer}>
      <div className={styles.storybookTitle}>Checked switch control:</div>
      <ToggleSwitch
        checked={switchChecked}
        onChange={() => {
          action(`Checked: ${switchChecked}`)();
          setSwitchChecked(!switchChecked);
        }}
      />
    </div>
  );
};
