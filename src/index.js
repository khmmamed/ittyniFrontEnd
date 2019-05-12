import React from "react";
import ReactDOM from "react-dom";
import Styled from "styled-components";
import { Search } from "./Components/Search/Search";

//import Store
import Store from "./Store/Elab/home";
import { dispatchFetchingTests } from "./Store/Elab/home/reducers";
import { connect, Provider } from "react-redux";

//Layout
import LayoutContainer, { PageHeader, Main } from "./Layout";

import "./styles.css";

const headerStyle =
  "background-color: #fff;height: 73px;width: 100%;z-index: 11;border-bottom: 1px solid #d4d4d4; display:flex;";
const Logo = Styled.div`
  flex : 1;
  padding : 20px 0 0 150px;
`;
const SearchBox = Styled.div`
  flex : 6;
  padding : 15px 0 0;
`;
const UserNav = Styled.div`
  flex : 2;
  padding : 20px 0 0 10px;
`;

const Listing = Styled.div`
  flex : 3;
`;
const Filter = Styled.div`
  flex : 1;
`;
const test = () =>
  Store.dispatch(dispatch => {
    dispatch({ type: "FETCH_TESTS_START" });
  });

function App({ dispatchFetchingTests }) {
  return (
    <LayoutContainer>
      <PageHeader pHeader={{ customStyle: headerStyle }} fixed>
        <Logo onClick={e => dispatchFetchingTests()}>Logo</Logo>
        <SearchBox>
          <Search />
        </SearchBox>
        <UserNav>User</UserNav>
      </PageHeader>
      <Main>
        <Listing>List</Listing>
        <Filter>Filter</Filter>
      </Main>
    </LayoutContainer>
  );
}

//Connect Redux State with React Props
const mapStateToProps = state => ({ ...state });

const Home = connect(
  mapStateToProps,
  { dispatchFetchingTests }
)(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={Store}>
    <Home />
  </Provider>,
  rootElement
);
