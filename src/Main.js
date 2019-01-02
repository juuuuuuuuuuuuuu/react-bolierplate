import React from "react";
import 'timeline3/js/timeline';
import examples from '../static/examples';
import EventListener from 'react-event-listener';

require('timeline3/css/timeline.css');
let timeline;
class Main extends React.Component {
    componentDidMount() {
        if (this.refs.timeline) {
            // timeline = new TL.Timeline('timeline', 'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml');
            const additionalOptions = {
                // start_at_end: true,
                // default_bg_color: {r:0, g:0, b:0}, //background color바꾸기
                timenav_height: 250, //아래 시간축 height
                // zoom_sequence: 2, // 이 속성 사용시 확대,축소기능  불가능
                marker_height_min: 50, // 아래 뜨는거 팝업 height 크기
                // optimal_tick_width: 500,
                timenav_position: 'top', //위아래 순서 바꾸기
            }

            const custom = {
                // className: {
                //     sliderClass: 'sliderabc',  //classname 변경가능 ( 상문주임님께 한번 물어보기 이것만 바꾸면 나머지는 작업가능한가...?)
                //     timenavClass: 'timeabc',
                //     menuBarClass: 'menubarabc'
                // },
                sliderStyle: {
                    // rootStyle: 'margin: 0; padding: 0;',
                    titleStyle: 'color: red;',
                    contentStyle: 'font-size: 15px;',
                    mediaBoxStyle: 'width: 250px',
                    mediaImageStyle: 'width: 100%; border: 0px solid red',
                    navStyle: 'color: gray;',
                    navIcon: ["\\f083", "\\f095"], //  왼쪽, 오른쪽 아이콘 (fontawesome에서 찾아서...)
                    loadingStyle: 'background-image: url(timeline3/css/img/loading.gif); background-repeat: no-repeat, repeat; background-color: transparent;',
                    loadingContent: '로딩중 입니다.'
                },
                timeNavStyle: {
                    // rootStyle: 'background-color: red;height: 400px;',
                    // timeAxisStyle: 'background-color: blue;',
                    // fontColor: 'color: black',
                    contentStyle: 'background-color: red; color: blue; border: 2px solid black;',
                    timeSpan: 'border: 1px solid black',
                },
                menuBarStyle: { //메뉴바 아이콘 수정
                    // rootStyle: 'background-color: yellow;',
                    // zoomInIcon: "\\f083",
                    // zoomOutIcon: "\\f083",
                    // resetIcon: "\\f083",
                },
                slideNav: false, // <>밑에  다음 내용이 나오는 것(  기본값: false)
                // menuBar: { //아이콘 안보이게 속성
                //     zoomIn: true,
                //     zoomOut: true,
                //     reset: false,
                // }

                //timenav에서 시간축 배열 길이 지정,,,할 수 있도록
                //간격이나 이런것도 --> 이러면 확대, 축소 못하나..? (로직확인해보기)
                //timeline색상 변경 가능한지

            }

            timeline = new TL.Timeline('timeline', examples, additionalOptions, custom);
            //첫번째 파라미터가 id값인거 같다. 전체 root를 잡는것
        }
    }

    handleClick = (e) => {
        if ( e.target.getAttribute('class') === 'tl-headline') {
            console.log("e.target.id", e.target.id)
        } else if (e.target.hasChildNodes() && e.target.querySelector('.tl-headline')){
            console.log("e.target.id", e.target.querySelector('.tl-headline').id)
        } else if (e.target.getAttribute('class') === 'tl-slidenav-icon') {
            console.log("e.target.id", e.target.id)
        } else if (e.target.hasChildNodes() && e.target.querySelector('.tl-slidenav-icon')) {
            console.log("e.target.id", e.target.querySelector('.tl-slidenav-icon').id)
        }
    }

    render() {
        return (
            <div id={"timeline"} ref={"timeline"} style={{width: '100%', height: '600px'}}>
                <EventListener target="window" onClick={this.handleClick}>
                    {timeline}
                </EventListener>
            </div>
        )
    }

}

export default Main;
