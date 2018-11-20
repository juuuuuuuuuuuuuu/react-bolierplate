import React, { Component } from 'react';

class Reduce extends Component {
    handleBasic1 = () => {
        const array = [1,2,3,4,5];
        const sum = array.reduce(
            (acc, cur) => {
                return acc + cur;}, 0);

        console.log(sum)
    }

    handleBasic2 = () => {
        const array2 = ['a', 'b', 'c', 'a', 'a', 'c'];
        const sum2 = array2.reduce(
            (acc, cur) => {
                if (acc[cur]) {
                    acc[cur] = acc[cur] + 1;
                } else {
                    acc[cur] = 1;
                }
                return acc;
                }, {});

        console.log(sum2)
    }

    handleBasic3 = () => {
        const array3 = [[1,2,3], [4,5,6]];
        const sum3 = array3.reduce(
            (acc, cur) => {
                return acc.concat(cur)}, []);

        console.log(sum3)
    }

    handleBasic4 = () => {
        const array4 = [
            {
                "title": "슈퍼맨",
                "cast": ["장동건", "권상우", "이동욱", "차승원"]
            },
            {
                "title": "스타워즈",
                "cast": ["차승원", "신해균", "장동건", "김수현"]
            },
            {
                "title": "고질라",
                "cast": []
            }
        ];
        const sum4 = array4.reduce((acc, cur, i) => {
            const key = 'cast';
            if (cur[key] && cur[key].length > 0) {
                cur[key].forEach(v => {
                    if (acc.indexOf(v) === -1) {
                        acc.push(v);
                    }
                })
            }
            return acc;
        }, []);

        console.log(sum4)
    }

    handleBasic5 = () => {
        const increment = (input) => { return input + 1; };
        const decrement = (input) => { return input - 1; };
        const double = (input) => { return input * 2; };
        const halve = (input) => { return input / 2 };

        const pipeline = [
            increment,
            double,
            decrement,
            decrement,
            decrement,
            halve,
            double,
        ];

        const initValue = 1;

        const sum5 = pipeline.reduce((acc, curr, i) => {
          return curr(acc);
        }, initValue);

        console.log(sum5);
    }

    handleBasic6 = () => {
      const map = new Map().set('number', 1).set('number2', 2);
      //key값만 뽑기
        console.log("key", map.keys())
        //value값만 뽑기
        console.log("value", map.values())
        for (const [key, value] of map) {
          console.log("of", key, value)
        }
    }

    handleBasic7 = () => {
      const map2 =  new Map().set('a', 1).set('b', 2);
      const map3 = new Map(
          [...map2].filter(([k, v]) => v > 1));
      console.log(map3)
    }

    handleBasic8 = () => {
        // let setA = new Set([1, 2, 3, 4, 5]);
        // let setB = new Set([4, 5, 6, 7, 8]);
        //

    }

    render() {
        return (
            <div>
              <div>
                <button onClick={this.handleBasic1}>reduce기초</button>
                <button onClick={this.handleBasic2}>중복되는 값의 갯수</button>
                <button onClick={this.handleBasic3}>배열 합치기</button>
                <button onClick={this.handleBasic4}>중복안되는 배열</button>
                <button onClick={this.handleBasic5}>함수형reduce</button>
              </div>
              <div>
                  <button onClick={this.handleBasic6}>Map기초</button>
                  <button onClick={this.handleBasic7}>Map응용</button>
                  <button onClick={this.handleBasic8}>Set이용하여 교집합,합집합,차집합</button>
              </div>
            </div>
        );
    }
}



export default Reduce;


