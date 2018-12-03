import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //router v 4
import "index.scss";
import main from './Main';
import SplitMe from './components/SplitMe';
import AppComponent from "./components/AppComponent";

// let HelloWorld = () => { //함수형 컴포넌트
//     return <h1>Hello there World!</h1>
// }

//BroserRouter: 동적으로 막 데이터 주고받고 하는 사이트 적합, 권장하는 것, 항상 child에 1개만 있어야함
//HashRouter: 정적인 웹사이트 적합
ReactDOM.render(
    <Router>
        <div>
        <Route exact path="/" component={AppComponent}/>
        </div>
    </Router>,
    document.getElementById("root")
);
