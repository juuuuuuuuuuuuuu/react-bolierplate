import React, { Component } from 'react';


class ExampleFinally extends Component {

render() {
    Promise.resolve('hello')
        .then((msg) => Promise.resolve(msg))
        .finally(() => console.log('finally!'))
        .then((msg) => console.log(msg));
    return (
        <div>

        </div>
    );
}
}



export default ExampleFinally;


