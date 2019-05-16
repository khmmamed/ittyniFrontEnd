import React from "react"
import styled from 'styled-components'


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
`

export const TestList = ({items}) =>(
    <StyledList>
        {items.map(test=>
            <Li key={test.nameFr}>
                <div className="mnemonic" style={{position : "relative"}}>
                    <svg width="90" height="90">
                        <circle cx="40" cy="45" r="35" stroke="#888888" strokeWidth="2" fill="none"></circle>
                    </svg>
                    <MnemonicTitle lent={test.mnemonic.length}>{test.mnemonic}</MnemonicTitle>
                </div>
                <div className="title">{test.nameFr}</div>
                <div style={{paddingLeft : "25px"}}>
                    <span class="badge badge-info">{Math.floor(test.bcode * 1.34)} MAD</span>
                </div>
            </Li>)
        }
    </StyledList>
)
