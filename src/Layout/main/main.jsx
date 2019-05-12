/**
 * @mainPage
 *
 * this page section has also
 * mainHeader
 * mainSide
 * mainContent
 * and mainFooter
 */
import React from "react";
import Styled from "styled-components"

const StyledMain = Styled.main`
  display : flex;
  flex : 1 100%;
  padding: 60px 0 0 200px;
`

//===== Main Container =========>
export const Main = ({ children, ...props }) => {
  return <StyledMain {...props}>{children}</StyledMain>;
};

//<=============================End Main
