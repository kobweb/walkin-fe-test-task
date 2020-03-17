import React, { memo, useMemo } from "react";
import PropTypes from "prop-types";

import { Card } from "../card";
import Title from "../title";

import styles from "./index.module.scss";

type RenderPropComputedValue = JSX.Element | string;

interface Props {
  renderTitle: () => RenderPropComputedValue;
  children: React.ReactNode;
}

export const CardWithTitle: React.FC<Props> = memo<Props>(
  ({ renderTitle, children }: Props): React.ReactElement => {
    const titleElement = useMemo(
      () => (
        <div className={styles.cardTitleContainer}>
          <Title>{renderTitle()}</Title>
        </div>
      ),
      [renderTitle]
    );

    return (
      <Card>
        {titleElement}
        {children}
      </Card>
    );
  }
);

CardWithTitle.propTypes = {
  renderTitle: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default CardWithTitle;
