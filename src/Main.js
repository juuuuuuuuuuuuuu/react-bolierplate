import React from "react";
import Promise from './Promise';
import Iterator from './Iterator';
// import Generator from './Generator';
// import AsyncAwait from './AsyncAwait';

class Main extends React.Component {
    render() { //  return 배열은 가능, 각각의 독립적인 element는 감싸야함
               //https://pawelgrzybek.com/return-multiple-elements-from-a-component-with-react-16/
        return (
            <React.Fragment>
                <Promise/>
                <Iterator/>
            </React.Fragment>
        )
    }

}

export default Main;
