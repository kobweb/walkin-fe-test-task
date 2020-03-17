import React, { useState } from "react";

import { Field } from "./index";
import styles from "./index.module.scss";

import ToggleSwitch from "../toggle-switch";

import "../../styles/index.scss";

export default {
  title: "Field",
  component: Field
};

export const DefaultField = () => (
  <div className={styles.storybookContainer}>
    <Field label="Field with switch">
      <ToggleSwitch checked onChange={() => {}} />
    </Field>
  </div>
);

export const FieldWithTitle = () => (
  <div className={styles.storybookContainer}>
    <Field label="Field with switch" renderTitle={() => "Field title"}>
      <ToggleSwitch checked onChange={() => {}} />
    </Field>
  </div>
);

export const FieldWithCustomTitle = () => (
  <div className={styles.storybookContainer}>
    <Field
      label="Field with switch"
      renderTitle={() => (
        <React.Fragment>
          <span style={{ color: "green" }}>Custom</span> field title
        </React.Fragment>
      )}
    >
      <ToggleSwitch checked onChange={() => {}} />
    </Field>
  </div>
);

export const FieldWithMessage = () => (
  <div className={styles.storybookContainer}>
    <Field
      label="Field with message"
      renderMessage={() => "Field descriprtion"}
    >
      <ToggleSwitch checked onChange={() => {}} />
    </Field>
  </div>
);

export const FieldWithCustomMessage = () => (
  <div className={styles.storybookContainer}>
    <Field
      label="Field with message"
      renderMessage={() => (
        <React.Fragment>
          <span style={{ color: "green" }}>Custom</span> field descriprtion
        </React.Fragment>
      )}
    >
      <ToggleSwitch checked onChange={() => {}} />
    </Field>
  </div>
);

export const FieldWithErrorMessage = () => (
  <div className={styles.storybookContainer}>
    <Field label="Field with error" renderError={() => "Field is required"}>
      <ToggleSwitch checked={false} onChange={() => {}} />
    </Field>
  </div>
);

export const VerticalField = () => (
  <div className={styles.storybookContainer}>
    <Field vertical label="Vertical field:">
      <ToggleSwitch checked={true} onChange={() => {}} />
    </Field>
  </div>
);

export const FieldWithAllProps = () => {
  const [switchChecked, setSwitchChecked] = useState(true);

  return (
    <div className={styles.storybookContainer}>
      <Field
        label="Some field"
        renderTitle={() => (
          <React.Fragment>
            <span style={{ color: "green" }}>Custom</span> field title
          </React.Fragment>
        )}
        renderMessage={() => (
          <React.Fragment>
            <span style={{ color: "green" }}>Custom</span> field descriprtion
          </React.Fragment>
        )}
        renderError={() => (!switchChecked ? "Field is required" : null)}
      >
        <ToggleSwitch checked={switchChecked} onChange={setSwitchChecked} />
      </Field>
    </div>
  );
};
