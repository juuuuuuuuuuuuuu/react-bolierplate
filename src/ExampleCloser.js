import React, { Component } from 'react';
class ExampleCloser extends Component {
render() {
    // - 내부함수 : 함수 안에 함수가 선언되 있는 것
    // - 외부함수 : 내부함수 바깥에 선언된 함수
    // - 내부함수는 외부함수의 지역변수에 접근할 수 있다.
    // - 외부함수가 소멸되도 내부함수는 외부함수의 지역변수에 접근할수 있다.
    // - 프라이빗변수 : 정보를 아무나 수정하는 것을 방지하는 기법(이 기법에 클로저를 사용)

    function outter() { // 외부함수
        let title = 'hi';
        function inner() { //내부함수
            console.log("title", title); //외부함수에 정의되어있는 지역변수에 접근가능
       }
        inner();
    }

    outter();


    function outter2() { //외부함수
        let title = 'hi2';
        return function() { //내부함수
            console.log("title2", title)
        }
    }

    const inner2 = outter2();
    inner2(); // 외부함수가 종료된 이후에도  외부함수에 있는 지역변수에 접근 가능


    function movie(title) {  //외부함수 title매개변수 => 함수안에서  지역변수로 사용되기 때문에 지역변수가 됨
        return {
            get_title: function() { //내부함수 (객체에 소속)
                return title; //지역변수는 내부함수에서 접근 가능함
            },
            set_title: function(_title) { //내부함수
                title = _title
            }
        }
    }

    //private 한 변수를 만든다?!? -->  왜 필요한가??
    // 소프트웨어가 커지다 보면 많은 사람들이 코드를 작성하게 됨
    //즉 title에 접근할 수 있는 애는 2가지 매소드로만 접근할 수있음 (아무나 수정할 수 없음 )
    // 안전하게 수정될 수 있음
    // 자바스크립트가 private한 변수를 사용할 수 있게 해주는 메커니즘
    const ghost = movie('ghost in the shell');
    const matrix = movie('matrix');

    console.log("##", ghost.get_title());
    console.log("##", matrix.get_title());

    matrix.set_title('matrix2');
    console.log("##", matrix.get_title());



//클로저 자주 실수하는 예제
//     let arr = [];
//     for (let i = 0; i < 5; i++) {
//         arr[i] = function() {
//             return i;
//         }
//     }
//
//     for (let n of arr) {
//         console.log(n());
//     }

    var arr = []
    for(var i = 0; i < 5; i++){ //i의 값은 외부함수의 변수가 아님
        // arr[i] = function() {
        //     return i; //결국 i에 5가 담기게 되는 이유 ==> 배열을 돌게 되면 마지막으로 i =5가 되는데  return하고 있는 i의 값은 외부함수의 지역변수가 아님
        // }
        arr[i] = function(id){ //외부함수
            return function() { // 내부함수
                return id;
            }
        }(i); //외부 함수를 즉석에서 실행함
    }
    for(var index in arr) {
        console.log(arr[index]());
    }
    return (
        <div>

        </div>
    );
}
}



export default ExampleCloser;


