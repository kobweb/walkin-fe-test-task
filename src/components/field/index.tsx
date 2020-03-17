import React, { memo, useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Title, { hTypes } from "../title";

import styles from "./index.module.scss";

type RenderPropComputedValue = JSX.Element | string | null;

interface Props {
  children: React.ReactNode;
  label: string;
  error?: string | null | boolean;
  vertical?: boolean;
  renderTitle?: () => RenderPropComputedValue;
  renderMessage?: () => RenderPropComputedValue;
  renderError?: () => RenderPropComputedValue;
}

export const Field: React.FC<Props> = memo<Props>(
  (props: Props): React.ReactElement => {
    const {
      children,
      label,
      vertical,
      renderTitle,
      renderMessage,
      renderError
    } = props;

    const titleElement = useMemo<
      RenderPropComputedValue
    >((): RenderPropComputedValue => {
      const title = renderTitle && renderTitle();

      return (title && (
        <div className={styles.titleContainer}>
          <Title type={hTypes.h4} bold={false}>
            {title}
          </Title>
        </div>
      )) as RenderPropComputedValue;
    }, [renderTitle]);

    const fieldElement = useMemo<JSX.Element>(
      (): JSX.Element => (
        <div
          className={classNames(styles.field, vertical && styles.fieldVertical)}
        >
          <div className={styles.label}>{label}</div>
          {children}
        </div>
      ),
      [label, children, vertical]
    );

    const messageElement = useMemo<
      RenderPropComputedValue
    >((): RenderPropComputedValue => {
      const message = renderMessage && renderMessage();
      const error = renderError && renderError();

      return ((error || message) && (
        <div className={classNames(styles.message, error && styles.error)}>
          {error || message}
        </div>
      )) as RenderPropComputedValue;
    }, [renderMessage, renderError]);

    return (
      <div className={styles.fieldContainer}>
        {titleElement}
        {fieldElement}
        {messageElement}
      </div>
    );
  }
);

Field.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  vertical: PropTypes.bool,
  renderTitle: PropTypes.func,
  renderMessage: PropTypes.func,
  renderError: PropTypes.func
};

Field.defaultProps = {
  error: null,
  vertical: false,
  renderTitle: () => null,
  renderMessage: () => null,
  renderError: () => null
};

export default Field;
