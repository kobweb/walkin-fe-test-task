import React, { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./index.module.scss";

export enum hTypes {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6"
}

const hClasses = {
  [hTypes.h1]: styles["title-h1"],
  [hTypes.h2]: styles["title-h2"],
  [hTypes.h3]: styles["title-h3"],
  [hTypes.h4]: styles["title-h4"],
  [hTypes.h5]: styles["title-h5"],
  [hTypes.h6]: styles["title-h6"]
};

interface Props {
  children: React.ReactNode;
  type?: hTypes;
  bold?: boolean;
}

export const Title: React.FC<Props> = memo<Props>(
  ({ children, type, bold }: Props): React.ReactElement => {
    const hClass = hClasses[type as hTypes];
    const fontClass = bold ? styles["title-bold"] : styles["title-medium"];

    return React.createElement(
      type as string,
      {
        className: classNames(styles.title, hClass, fontClass)
      },
      children
    );
  }
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  type: PropTypes.oneOf<hTypes>([
    hTypes.h1,
    hTypes.h2,
    hTypes.h3,
    hTypes.h4,
    hTypes.h5,
    hTypes.h6
  ])
};

Title.defaultProps = {
  type: hTypes.h1 as hTypes,
  bold: true
};

export default Title;
