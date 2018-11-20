import React, { Component } from 'react';
// import throttle from 'lodash.throttle'
import debounce from 'lodash.debounce';


class ExamplePromise extends Component {
    constructor() {
        super();
        // this.handleDebounce = this.handleDebounce.bind(this);
    }

    handleDebounce = (e) => {
        // debounce(this.handleStart, 100); // 이런식으로 쓰면 안된다!! SyntheticEvent pooling (이벤트 풀링)  참고 https://reactjs.org/docs/events.html#event-pooling
        // 콜백함수는 해당 이벤트가 실행되는 동안에만 유효함
        this.setSearchTerm(e.target.value);
    }

    setSearchTerm = debounce((searchTerm) => this.handleStart(searchTerm), 2000);

    handleStart = (value) => {
        console.log("start", value)
        this.handlePromise1(value)
            .then(text => {
                console.log(text)
            })
            .catch((err) => {console.log("err", err)})
    }

    handlePromise1 = (value) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.handlePromise2(resolve(value));
            }, 300);
        });
    }

    handlePromise2 = (value) => {
        return new Promise((resolve, reject) => {
            resolve(value);
        });
    }


    render() {
        console.log("##", 'abc'.padStart(10))



        return (
            <div>
                <input onKeyUp={this.handleDebounce}></input>
            </div>
        );
    }
}



export default ExamplePromise;


