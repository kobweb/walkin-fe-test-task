import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./index.module.scss";

interface Props {
  checked: boolean;
  onChange: (value: boolean) => void;
}

export const ToggleSwitch: React.FC<Props> = memo<Props>(
  ({ onChange, checked }: Props): React.ReactElement => {
    const handleClick = useCallback(() => {
      onChange(!checked);
    }, [checked, onChange]);

    return (
      <div
        className={classNames(styles.switch, checked && styles.switchEnabled)}
        onClick={handleClick}
      />
    );
  }
);

ToggleSwitch.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired
};

export default ToggleSwitch;
