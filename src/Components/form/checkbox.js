import React from "react"
import styled from 'styled-components'

const CheckboxS = styled.input`
    position: absolute;
    top: 35px;
    left: 25px;
    z-index: 99;
`
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`

  padding: 0;
  position: absolute;
  white-space: nowrap;
  top: 35px;
  left: 25px;
  z-index: 99;
`;


const Checkbox = ({ ...props }) => (
    <div>
      <HiddenCheckbox {...props} />
    </div>
  );


export const CheckBox = (props) => {
    
    

    return <Checkbox type="checkbox" {...props}/>
};