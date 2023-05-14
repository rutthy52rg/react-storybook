// ./src/stories/button.js

import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";



const getVariantStyles = ({ primary = false, theme }) =>
  primary
    ? css`
        color: white;
        background-color: ${theme.colors.primary};
      `
    : css`
        color: ${theme.colors.text};
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      `;

const getSizeStyles = ({ size = "medium", theme }) => {
  switch (size) {
    case "small": {
      return css`
        font-size: ${theme.typography.size.s1}px;
        padding: 10px 16px;
      `;
    }
    case "large": {
      return css`
        font-size: ${theme.typography.size.s3}px;
        padding: 12px 24px;
      `;
    }
    default: {
      return css`
        font-size: ${theme.typography.size.s2}px;
        padding: 11px 20px;
      `;
    }
  }
};

/**
 * Primary UI component for user interaction
 */
const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.typography.type.primary};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${(props) => getVariantStyles(props)}
  ${(props) => getSizeStyles(props)}
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
`;

export const Button = ({ label, ...rest }) => (
  <StyledButton {...rest}>{label}</StyledButton>
);

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
