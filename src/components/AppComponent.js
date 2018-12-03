import React, { Component, lazy } from 'react';
// import asyncRoute from './../lib/asyncRoute';
//
// const OtherComponent = asyncRoute(() => import('./SplitMe'));
// const OtherComponent = React.lazy(() => import('./SplitMe'));
class AppComponent extends Component {
    state = {
        SplitMe: null,
    }



    showSplitMe = () => {
        // this.setState({
        //     SplitMe: OtherComponent,
        // });
        import('./SplitMe').then(({default: Component}) => {
            this.setState({
                SplitMe: Component,
            });
        })

    }

    render() {
        const { SplitMe } = this.state;
        return (
            <div>
                <h2>asdasd</h2>
                {/*<Menu/>*/}
                {SplitMe && <SplitMe/>}
                {/*{SplitMe ? <SplitMe/> : null}*/}
                {/*{SplitMe}*/}
                {/*<React.Suspense fallback={<div>loading...</div>}>*/}
                    {/*<OtherComponent/>*/}
                {/*</React.Suspense>*/}

                <button onClick={this.showSplitMe}>clickme</button>

            </div>
        )
    }
}

export default AppComponent;
