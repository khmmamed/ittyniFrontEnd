import React from "react";
import ReactDOM from "react-dom";
import Styled from "styled-components";
import { Search } from "./Components/Search/Search";
import {TestList} from "./Components/Listing/Listing"
import { Filter } from "./Components/Filter/Filter"


//import Store
import Store from "./Store/Elab/home";
import { dispatchFetchingTests, dispatchSearchLabTestS, testchecked, uncheckedTest } from "./Store/Elab/home/actions";
import { connect, Provider } from "react-redux";

//Layout
import LayoutContainer, { PageHeader, Main, device } from "./Layout";

import "./styles.css";

const headerStyle =
  "background-color: #fff;height: 73px;width: 100%;z-index: 11;border-bottom: 1px solid #d4d4d4; display:flex;";
const Logo = Styled.div`
  flex : 1;
  padding : 20px 0 0 150px;
  font-size: 25px;
  font-weight: 700;

  @media ${device.mobileS} {
    padding : 20px 0 0 150px;
  }

  @media ${device.laptop} {
    padding : 15px 15px 0 5px;
  }
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
  
  @media ${device.laptop} {
    flex : 3;
  }

  @media ${device.mobileS} {
    flex : 3 100%;
  }

`;
const TotalPrice = Styled.span`
  font-size: 18px;
  font-weight: 700;
  color: firebrick;
`

function App(props) {
  if(!props.getAllTests.fetched) props.dispatchFetchingTests();
  const {tests} = props.getAllTests;
  const {checked, panel} = props.BuildTestsList;
  const calculTotal=()=>{
    var total = 0;
    panel.map(test=>{ total += Number(test.testPrice); })
    total = Math.floor(total * 1.34) ;
    return total;
  }

  const totalPrice = calculTotal();
  return (
    <LayoutContainer>
      <PageHeader pHeader={{ customStyle: headerStyle }} fixed>
        <Logo>i<span style={{color : 'red'}}>TT</span>yni</Logo>
        <SearchBox>
          <Search  onClick={props.dispatchSearchLabTestS}/>
        </SearchBox>
        <UserNav>User</UserNav>
      </PageHeader>
      <Main>
        { (panel.length > 0) ? 
        <div className="alert alert-info" role="alert" style={{width : "100%"}}>
          {panel.length} tests selectionne - Total de votre Bilan <TotalPrice>{ totalPrice }</TotalPrice> MAD
        </div> : ''
        }
        <Listing>
          <h3>list of tests</h3>
          <TestList items={tests} 
                    checked={checked} 
                    testchecked={props.testchecked} 
                    panel={panel} 
                    uncheckedTest={props.uncheckedTest}/>
        </Listing>
        <Filter/>
      </Main>
    </LayoutContainer>
  );
}

//Connect Redux State with React Props
const mapStateToProps = state => ({ ...state });

const Home = connect(
  mapStateToProps,
  { dispatchFetchingTests, dispatchSearchLabTestS, testchecked, uncheckedTest }
)(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={Store}>
    <Home />
  </Provider>,
  rootElement
);
