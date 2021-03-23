import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--padding": "0",
    "--borderRadius": "4px",
  },
  medium: {
    "--height": "12px",
    "--padding": "0",
    "--borderRadius": "4px",
  },
  large: {
    "--height": "16px",
    "--padding": "4px",
    "--borderRadius": "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  const thing = Object.keys(SIZES);
  if (!thing.includes(size)) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  const styles = SIZES[size];

  return (
    <BaseProgressBar
      style={styles}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <BaseProgressBarFill value={value} />
    </BaseProgressBar>
  );
};

const BaseProgressBar = styled.div`
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);

  width: 370px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BaseProgressBarFill = styled.div`
  ${({ value }) => css`
    height: 100%;
    width: ${value}%;
    border-radius: 4px;
    background: ${COLORS.primary};

    ${value != 100 &&
    `
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `}
  `}
`;

export default ProgressBar;
