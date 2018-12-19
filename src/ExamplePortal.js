import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
// 리액트 루트 밖을 변경할 수 있음
// 사용처 iframe, html변경하지 못할때, 리액트 플러그인 만들거나 여러가지 사례ㅒ들이 이씅ㅁ
//리액트 루트 밖에서 렌더를 할때 사용할 수 있음



// higher-order component (HOC) : 컴포넌트 보호
const BoundaryHOC = ProtectedComponent =>
    class Boundary extends Component {
        state = {
            hasError: false,
        };

        componentDidCatch = () => {
            this.setState({
                hasError: true,
            })
        }

        render () {
            const { hasError } = this.state;
            if (hasError) {
                return <ErrorfallBack/>
            } else {
                return <ProtectedComponent/>
            }
        }
    }


class ErrorMaker extends  Component {
    state = {
        friends: ['ju', 'young']
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                friends: null,
            })
        }, 2000)
    }

    render() {
        const { friends } = this.state;
        return friends.map(friend => `${friend}`)
    }
}


const PErrorMaker = BoundaryHOC(ErrorMaker)

const Message = () => "message";



class Portals extends Component {
    render() {
        return (
            createPortal(<Message/>, document.getElementById('portal'))
        )
    }
}

const PPortals = BoundaryHOC(Portals);

const ErrorfallBack = () => "Sorry";

class ExamplePortal extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        }
    }

    //오직 부모만의 child에서 나는 에러를 잡을 수 있음
    //에러를 구분하고 대처할 수 있음
    // componentDidCatch = (error, info) => {
    //     this.setState({
    //         hasError: true,
    //     })
    //     console.log(`catched ${error} info: ${JSON.stringify(info)}`)
    // }

    render() {
        // const { hasError } = this.state;
        return (
            <Fragment>
                <Portals/>
                {/*이런식으로 하면 모든 컴포넌트마다 t/f에 따라 에러처리를 해야함*/}
                {/*모든 컴포넌트를 보호하고 싶음*/}
                {/*{hasError ? <ErrorfallBack/> : <ErrorMaker/>}*/}
                <PPortals/>
                <PErrorMaker/>
            </Fragment>
        );
    }
}



export default BoundaryHOC(ExamplePortal);


