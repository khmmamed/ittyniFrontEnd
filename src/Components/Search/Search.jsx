import React from "react"
import styled from 'styled-components';

const SearchInput = styled.input`
    padding-right: 33px;
    padding-left: 12px;

    @media (max-width: 768px) {
        width : 100% !important;
    }
`;

const SearchIcon = styled.i`
    left: auto;
    right: 25px;
    float: right;
    margin-top: 16px;
    position: absolute;
    margin: 11px 2px 4px 10px;
    z-index: 3;
    width: 16px;
    font-size: 16px;
    text-align: center;
`;

export const Search = (props)=>{
    
    let name ;
    const handleInputChange= (e) =>{
        props.onClick(e.target.value);
    }

    

    return(
        <div className="input-icon input-icon-lg right" style={{position : "relative"}}>
            <SearchIcon className="fa fa-search font-green"></SearchIcon>
            <SearchInput  type="text" 
                    className="form-control input-lg" 
                    placeholder="Find Medical Procedure"
                    onChange = {handleInputChange}
                    value={name}
            />
        </div> 
    )
}