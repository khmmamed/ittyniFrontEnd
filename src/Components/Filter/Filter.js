import React from "react"
import Styled from 'styled-components'
import {device} from "../../Layout"
import {ReactComponent as Kidneys } from "./ico/kidney.svg"
import {ReactComponent as Heart } from "./ico/heart.svg"
import {ReactComponent as Liver } from "./ico/liver.svg"
import {ReactComponent as Cholesterol } from "./ico/chemical.svg"

const StyledFilter = Styled.div`

  flex : 1 50%;
  order : 1;
  padding : 50px 0 0 30px;
  display : block;

  @media ${device.laptop} {
    flex : 1 100%;
    order : -1;
    
    display: none;
  }

  @meida ${device.mobileM} {
    
  }

`;

const Span = Styled.span`
  padding-right : 10px;
`

export const Filter = ({children})=>{

    return(
        <StyledFilter>
            <div style={{marginBottom : "20px"}}>
                <Span><Kidneys heigth="35" width="35"/> Bilan Renal</Span>
                <Span><Heart heigth="35" width="35"/> Bilan Cardiac</Span>
            </div>
            <div>
                <Span><Liver heigth="35" width="35"/> Bilan Hepatique</Span>
                <Span><Cholesterol heigth="35" width="35"/> Bilan Lipidique</Span>
            </div>
        </StyledFilter>
    )
}
