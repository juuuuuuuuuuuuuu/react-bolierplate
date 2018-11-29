import React, { Component } from 'react';
// import throttle from 'lodash.throttle'
import debounce from 'lodash.debounce';


class ExampleAsync2 extends Component {
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

    async handleStart(value) {
        let a = await this.handlePromise1(value)
        console.log("AA", a)
    }

    async handlePromise1 (value) {
        return await this.handlePromise2(value);
    }

    handlePromise2 = (value) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value);
            }, 300);
        })
    }

//에러처리 비교
    makerequest = () => {
        try {
            this.getJSON('a')
                .then(result =>{
                    const data = JSON.parse(result);
                    console.log("data")
                })
                .catch((err) => {
                    console.log("1", err)
                })
        } catch(err) {
            console.log("2", err)
        }
    }

    makerequest2 = async() => {
        try {
            JSON.parse(await this.getJSON(null))
        } catch (err) {
            console.log("Err", err)
        }
    }

    getJSON = (param) => {
        return new Promise((resolve, reject) => {
            if (param) {
                console.log("p", param)
                resolve(param);
            } else {
                reject()
            }
        })
    }

    //분기처리
    makeRequest3 = () => {
        return this.getJSON()
            .then(data => {
                return this.makeAnotherRequest(data)
                    .then(moreData => {
                        console.log(moreData)
                        return moreData
                    });
            })
    }

    makeRequest4 = async() => {
        const data = await this.getJSON()
        const moreData = await this.makeAnotherRequest(data)
        console.log(moreData)
    }

    ///에러 stack
    makeRequest5 = () => {
        return this.callAPromise()
            .then(() => this.callAPromise())
            .then(() => this.callAPromise())
            .then(() => this.callAPromise())
            .then(() => this.callAPromise())
            .then(() => {
                throw new Error("oops");
            })
    }

    callAPromise = () => {
        return new Promise((resolve, reject) => {
            resolve();
        })
    }

    makeRequest6 = async () => {
        await this.callAPromise()
        await this.callAPromise()
        await this.callAPromise()
        await this.callAPromise()
        await this.callAPromise()
        throw new Error("oops");
    }

    callAPromise = () => {
        return new Promise((resolve, reject) => {
            resolve()
        })
    }


     job = (x) => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("x", x)
            resolve(x);
        }, x * 1000);
    })
    }

    timeStamp = async() => {
        try {
            const [a, b, c] = await Promise.all([this.job(3), this.job(6), this.job(9)]);
            console.log("###", a,b,c)
            // const c = await this.job(6);
            return a + b + c;
        } catch(err) {
            console.log(err)
        }
    }

    timeStamp2 = async() => {
        const promises = [6, 9, 3].map((timer) => (
            new Promise((res, req) => {
                setTimeout(() => res(timer), timer * 100);
            })
        ))

        for await (const result of promises) {
            console.log("RR",  result);
        }

    }

    timeStamp3 = async() => {
        try {
         for (const result of await Promise.all([this.job(3), this.job(6), this.job(9)])) {
             console.log(result)
         }
        } catch(err) {
            console.log(err)
        }
    }


    render() {
        this.makerequest();
        this.makerequest2();
        // console.log("tt", this.timeStamp())
        // this.timeStamp2();
        // this.timeStamp3();
        // this.makeRequest5()
        //     .catch(err => {
        //         console.log(1, err);
        //         // output
        //         // Error: oops at callAPromise.then.then.then.then.then (index.js:8:13)
        //     })
        // this.makeRequest6()
        //     .catch(err => {
        //         console.log(2, err);
        //         // output
        //         // Error: oops at callAPromise.then.then.then.then.then (index.js:8:13)
        //     })
        return (
            <div>
                <input onKeyUp={this.handleDebounce}></input>
            </div>
        );
    }
}



export default ExampleAsync2;


