import React from "react";
import Styled from "styled-components";

/**
 * PageHeaderStyle
 * custom height
 * fixed or not
 */

const PageHeaderStyle = Styled.header`
  
  flex: 1 100%;
  width: 100%;

  /** Set background */
  background-color: ${props => props.pHeader.bgColor};
  
  /** Set Header height */
  height : ${props => props.pHeader.height};

  /** Set Header to Fixed*/
  ${props => (props.pHeader.fixed ? " position: fixed;   top: 0;  " : "")};

  /** Add custom styles or Override existing  */
  ${props => props.pHeader.customStyle};

`;

/**
 * PageHeader Component
 *
 *
 * @param {*} param
 */
export const PageHeader = ({ children, pHeader, className }) => (
  <PageHeaderStyle className={className} pHeader={pHeader}>
    {children}
  </PageHeaderStyle>
);
