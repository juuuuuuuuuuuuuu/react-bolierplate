import React, { Component, Fragment } from 'react';

const MAX_Number = 10;

//외부에서 state관리 및 state를 핸들링 할 수 있음
//setting state null
//언제 컴포넌트 업데이트할지 안할지 결정해주는게 set state null이다.

const addMaker = (state, props) => {
    const { number } = state;
    if (number < MAX_Number) {
        return {
            number: number + 1,
        }
    } else {
        return null;
    }
}

class ExampleState extends Component {
    state = {
        number: 0,
    }

    handleClick = () => {
        this.setState(addMaker)
    }

    render() {
        const { number } = this.state;
        return (
            <button onClick={this.handleClick}>`clickme${number}`</button>
        );
    }
}

export default ExampleState;


