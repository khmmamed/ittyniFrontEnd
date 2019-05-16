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
import {device} from "../device"

const StyledMain = Styled.main`
  display : flex;
  flex : 1 100%;
  
  @media ${device.mobileS} {
    padding: 60px 0 0 150px;
  }

  @media ${device.laptop} {
    padding: 60px 0 0 ;
    flex-flow : row wrap;
  }
`

//===== Main Container =========>
export const Main = ({ children, ...props }) => {
  return <StyledMain {...props}>{children}</StyledMain>;
};

//<=============================End Main
