import React, { memo } from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

interface Props {
  children: React.ReactNode;
}

export const Card: React.FC<Props> = memo<Props>(
  ({ children }: Props): React.ReactElement => (
    <div className={styles.card}>{children}</div>
  )
);

Card.propTypes = {
  children: PropTypes.node.isRequired
};

export default Card;
