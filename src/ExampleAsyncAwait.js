import React, { Component } from 'react';
class ExampleAsyncAwait extends Component {
    constructor() {
        super();
    }

    render() {

//두 코드 비교
        //generator코드
        function* generator() {
            const users = yield getUser();
            console.log("user", users)
            return users;
        }

        const iterator = generator();
        const iteration = iterator.next();//generator함수 실행

        iteration.value.then(
            resolve => {
                const nextIteration = iterator.next(resolve);
                nextIteration;
            }
        )

        function getUser() {
            return new Promise((resolve, reject) => {
                resolve('test');
            })
        }


        //async로 간단한 소스
        async function generator2() {
            const users = await getUser();
            console.log("uuu", users)
            return users;
        }

        generator2();



        /////await Promise.all([프로미스들]) 예제
        const job = (x) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("x", x)
                    resolve(x);
                }, x * 100);
            })
        }

        //3,9초 같이 실행, 6초는 그다음 실행
        async function timeStamp() {
            const [a, b] = await Promise.all([job(3), job(9)]);
            const c = await job(6);
            return a + b + c;
        }

        timeStamp()
            .then(res => {console.log("Res", res)})
        return (
            <div>
            </div>
        );
    }
}



export default ExampleAsyncAwait;


