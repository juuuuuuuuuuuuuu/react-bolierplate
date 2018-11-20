import React, { Component } from 'react';
class ExampleIterator extends Component {
    constructor() {
        super();
    }

    render() {
        //iterator 무한으로 반복함/////////
        // 내부적을 반복을 처리하기 때문에 for of문에서 주로 사용
        let factorial = {
            [Symbol.iterator]() {
                let count = 1;
                let cur = 1;
                return {
                    next() {
                        [count, cur] = [count + 1, cur * count];
                        return {done: false, value: cur}
                    }
                }
            }
        }

        for (let n of factorial) {
            //next()값들이 반환되는것
            if (n > 1000) break;
            console.log(n)
        }


//iterator코드
        let fibonacci = {
            maxStep: 20,
            [Symbol.iterator]() {
                let pre = 0, cur = 1, step = 0, maxStep = this.maxStep;
                return {
                    next() {
                        [pre, cur] = [cur, pre + cur];
                        return {done: step ++ >= maxStep, value: cur}
                    }
                }
            }
        }

        for (let n of fibonacci) {
            console.log("nn", n)
        }
// generator 코드 ( *, yield) ==> next랑 return되는 값들 명시안해줘도 됨
        let fibonacci2 = {
            maxStep: 20,
            *[Symbol.iterator]() {
                let pre = 0, cur = 1, step = 0, maxStep = this.maxStep;
                while(step ++ < maxStep) {
                    [pre, cur] = [cur, pre + cur];
                    yield cur;
                }
            }
        }

        for (let n of fibonacci2) {
            console.log("nn2", n)
        }

////////generator를 직접 구현한 코드
        let custom = () => {
            let count = 1;
            let cur = 1;
            return {
                next: () => {
                    cur *= count ++;
                    return {done: false, value: cur}
                }
            }
        }

        let customFact = custom();
        console.log("FF", customFact.next().value)
        console.log("FF", customFact.next().value)
////////////

        //무수히 반복한 iteraor단점을 극복한 generator
        //return에 done 과 value가 빠짐 next함수도 자동으로 지원해줌
        function * factorialGenerator() {
            let cur = 1;
            let count = 1;
            while(true) {
                [count, cur] = [count + 1, cur * count]
                yield cur;
            }
        }



        //generator복잡한 코드 (yield* 가능)
        let myObj = {};
        myObj[Symbol.iterator] = function* () {
            yield "1"; //단일 값이 전달
            yield* [2,3];  //yield* 로 값을 반환하면 --> 해당 값이 다시 하나의 iterator로 취급되어 내부루프 처리하듯 순서대로 처리함 //배열
            yield* "45"; //문자열
            yield* innerGenerator(); //다른 반복기 값
            yield "9";
        }

        function* innerGenerator() {
            yield 6;
            yield* new Set(["7", "8"]);
        }

        console.log([...myObj]) //...의 의미는 순서대로 순환한 결과를 배열로 만든다.

        let fact = factorialGenerator();
        console.log("##",fact.next().value ) // next로 접근가능
        console.log("##",fact.next().value )


        //실제 동기코드 작성
        function getDOM() {
            var xhr = new XMLHttpRequest();
            xhr.open('/fetchDOM');
            xhr.onload = () =>{
                xhrRequests.next(xhr.responseText);
            }
            xhr.send();
        }

        function getData() {
            var xhr = new XMLHttpRequest();
            xhr.open('/fetchDOM');
            xhr.onload = () =>{
                xhrRequests.next(xhr.responseText);
            }
            xhr.send();
        }

        function manipulateDOM(dom, data) {
            console.log("DD", dom, data)
        }

        var xhrRequests = function* () {
            var dom, data;
            dom = yield getDOM();
            data = yield getData();
            yield manipulateDOM(dom, data);
        }

        return (
            <div>

            </div>
        );
    }
}



export default ExampleIterator;


