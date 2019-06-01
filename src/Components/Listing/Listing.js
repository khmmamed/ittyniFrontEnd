import React from "react"
import styled from 'styled-components'

import {CheckBox} from "../form/checkbox";

const StyledList = styled.ul`
    padding : 0;
    list-style-type: none;
`
const Li = styled.li`
    display: flex;
    background-color: white;
    margin: 10px;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`
const MnemonicTitle = styled.div`
    position: absolute;
    top: 30px;
    left: ${props=>(props.lent<=3) ? "25px;" : "10px;"};
    font-size: small;
    font-weight: 700;
    flex: 1;
`
const TestTitle = styled.div`
    flex : 4;
`
const TestPrice = styled.div`
    padding-left: 25px;
    flex: 1;
    text-align: right;
`
const Mnemonic = styled.div`
    
`

const MnemonicIcon = styled.svg`

    & > circle {
        fill : ${props => (props.checked ? "salmon" : "papayawhip")};
        
        &:focus {
            stroke: 0 0 0 3px pink;
        }
    }
    
`

export const TestList = ({items, checked, testchecked, panel, uncheckedTest}) =>{
    
    const isChecked= (testTitle)=>{
        for( var i = 0; i < panel.length; i++){ 
            if ( panel[i].testTitle === testTitle) {
              return true;
            }
          }
        return false;
    }
    const handleCheckboxEvents=(e) => {
        const name = e.target.getAttribute('name');
        const value = e.target.getAttribute('price');
        return checkIfExist(name) ?  uncheckedTest(name) : testchecked(name , value);
    }
    const checkIfExist=(name)=>{
        let ifExist = false;
        for( var i = 0; i < panel.length; i++){ 
            if ( panel[i].testTitle === name) {
                ifExist = true; break;
            }
          }
        return ifExist;
    }
    return(
    <StyledList>
        {items.map(test=>

            <Li key={test.nameFr}   >

                <Mnemonic className="mnemonic" style={{position : "relative"}}>
                    
                    <MnemonicIcon width="90" height="90" checked={isChecked(test.nameFr)}>
                        <circle cx="40" cy="45" r="35" stroke="#888888" strokeWidth="2" 
                                name={test.nameFr} 
                                price={test.bcode}
                                onClick={handleCheckboxEvents}></circle>
                    </MnemonicIcon>
                    <MnemonicTitle lent={test.mnemonic.length}>{test.mnemonic}</MnemonicTitle>
                </Mnemonic>

                <TestTitle>{test.nameFr}</TestTitle>

                <TestPrice>
                    <span className="badge badge-info">{Math.floor(test.bcode * 1.34)} MAD</span>
                </TestPrice>
            </Li>)
        }
    </StyledList>
)}
