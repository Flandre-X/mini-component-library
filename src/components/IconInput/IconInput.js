import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": 24 / 16 + "rem",
    "--borderWidth": 1 + "px",
    "--fontSize": 14 / 16 + "rem",
    "--iconSize": 14 + "px",
  },
  large: {
    "--height": 36 / 16 + "rem",
    "--borderWidth": 2 + "px",
    "--fontSize": 18 / 16 + "rem",
    "--iconSize": 18 + "px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const validSizes = Object.keys(SIZES);
  if (!validSizes.includes(size)) {
    throw new Error(`Invalid size: ${size}`);
  }

  const styles = {
    "--width": `${width}px`,
    ...SIZES[size],
  };

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <TextInput id="icon-input" placeholder={placeholder} style={styles} />
      <IconWrapper style={{ "--size": styles["--iconSize"] }}>
        <Icon id={icon} size={styles["--iconSize"]} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  padding-left: var(--height);
  border: none;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  outline-offset: 2px;
  font-size: var(--fontSize);
  font-weight: 700;
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
