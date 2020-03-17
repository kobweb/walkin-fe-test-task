import React, { useState, useCallback } from "react";

import CardWithTitle from "./components/card-with-title";
import ToggleSwitch from "./components/toggle-switch";
import Field from "./components/field";

import styles from "./app.module.scss";

// TODO: add icon for title

export const App = () => {
  const [switchChecked, setSwitchChecked] = useState(true);

  const renderCardTitle = useCallback(() => "Eat Now Features", []);

  const renderFieldTitle = useCallback(
    () => "Do you want diners to be able to request tables?",
    []
  );

  const renderFieldMessage = useCallback(
    () =>
      "This setting determines whether or not diners can request to ‘Eat Now’ at your restaurant.",
    []
  );

  const renderFieldError = useCallback(
    () => (!switchChecked ? "Field is required" : null),
    [switchChecked]
  );

  return (
    <div className={styles.app}>
      <div className={styles.cardContainer}>
        <CardWithTitle renderTitle={renderCardTitle}>
          <Field
            label="Enabled"
            renderTitle={renderFieldTitle}
            renderMessage={renderFieldMessage}
            renderError={renderFieldError}
          >
            <ToggleSwitch checked={switchChecked} onChange={setSwitchChecked} />
          </Field>
        </CardWithTitle>
      </div>
    </div>
  );
};

export default App;
