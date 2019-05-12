import React from "react";
import ReactDOM from "react-dom";
import Styled from "styled-components"
import { Search } from "./Components/Search/Search"

//Redux modules
   import { createStore, applyMiddleware } from "redux"
   import logger from "redux-logger";
   //import thunk from "redux-thunk";
//---import End
const initial = store => store = "my store"

const Store = createStore(initial, applyMiddleware(logger) );

//Layout
 import LayoutContainer, {
    PageHeader, Main
 } from "./Layout"

import "./styles.css";

const headerStyle = "background-color: #fff;height: 73px;width: 100%;z-index: 11;border-bottom: 1px solid #d4d4d4; display:flex;"
const Logo = Styled.div`
  flex : 1;
  padding : 20px 0 0 150px;
`
const SearchBox = Styled.div`
  flex : 6;
  padding : 15px 0 0;
`
const UserNav = Styled.div`
  flex : 2;
  padding : 20px 0 0 10px;
`

const Listing = Styled.div`
  flex : 3;
`
const Filter = Styled.div`
  flex : 1;
`



function App() {
  return (
    <LayoutContainer>
      <PageHeader pHeader={{customStyle : headerStyle}} fixed>
        <Logo>Logo</Logo>
        <SearchBox><Search /></SearchBox>
        <UserNav>User</UserNav>
      </PageHeader>
      <Main>
        <Listing>List</Listing>
        <Filter>Filter</Filter>
      </Main>
    </LayoutContainer>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
