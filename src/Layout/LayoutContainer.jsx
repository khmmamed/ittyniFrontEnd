import React from "react";
import Styled from "styled-components";

const StyledLayoutContainer = Styled.div`
  display : flex; 
  flex-flow : row wrap;

  /**Add custom Styles or Overrides existing*/
  ${props => props.customStyle}
`;

/**
 * this is a Layout wrapper
 **/
export const LayoutContainer = ({ children, customStyle, className }) => (
  <StyledLayoutContainer customStyle={customStyle} className={className}>
    {children}
  </StyledLayoutContainer>
);
