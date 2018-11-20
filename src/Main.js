import React from "react";
import Reduce from './Reduce';
import ExamplePromise from './ExamplePromise';
import ExampleIterator from './ExampleIterator';
import ExampleAsyncAwait from './ExampleAsyncAwait';
import ExampleAsync2 from "./ExampleAsync2";
import ExampleCloser from "./ExampleCloser";
// import "@babel/polyfill"; //genterator사용하려고 임포트함  https://stackoverflow.com/questions/49253746/error-regeneratorruntime-is-not-defined-with-babel-7
                          //https://esausilva.com/2017/07/11/uncaught-referenceerror-regeneratorruntime-is-not-defined-two-solutions/
//위에꺼 다 필요 없음 https://www.zerocho.com/category/ECMAScript/post/57a830cfa1d6971500059d5a
// import Generator from './Generator';
// import AsyncAwait from './AsyncAwait';

class Main extends React.Component {
    render() { //  return 배열은 가능, 각각의 독립적인 element는 감싸야함
               //https://pawelgrzybek.com/return-multiple-elements-from-a-component-with-react-16/
        return (
            <React.Fragment>
                {/*<Reduce/>*/}
                {/*<ExamplePromise/>*/}
                {/*<ExampleIterator/>*/}
                {/*<ExampleAsyncAwait/>*/}
                {/*<ExampleAsync2/>*/}
                <ExampleCloser/>
            </React.Fragment>
        )
    }

}

export default Main;
