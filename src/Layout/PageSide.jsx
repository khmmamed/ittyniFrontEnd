/**
 * pSide v0.0
 * @pageSide {*} param {children}
 */

import React from "react";
import Styled from "styled-components";
import { device } from "./device";

/**********************
 * Other styles needed
 *********************/
const HideSideBar = {
  display: "none"
};

const showOnAllScreen = {
  width: "100%",
  display: "block"
};

/*******************
 * Default style
 *******************/
const StyledPageSide = Styled.aside`
  flexGrow: 1;
  border: 2px solid blue;
  

 @media ${device.mobileS}{
    display : block;
    position : absolute; 
    min-height: 100%;
    background-color : blue;
  }

 @media ${device.mobileL}{
    width : 200px;
  }

 @media ${device.laptop} {
    display : block;
    position : inherit;
    background-color : inherit;
    width : 200px;
}
`;

//Render PageSide
export const PageSide = ({ children, ...props }) => (
  <StyledPageSide {...props}>{children}</StyledPageSide>
);
