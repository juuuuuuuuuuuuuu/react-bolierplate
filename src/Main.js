import React from "react";
import '../timeline3/js/timeline';

class Main extends React.Component {
    render() {
        // var additionalOptions = {
        //     start_at_end: true,
        //     default_bg_color: {r:0, g:0, b:0},
        //     timenav_height: 250
        // }

        // const timeline = new TL.Timeline('timeline-embed',
        //     'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml', additionalOptions)
        //사용방법: https://timeline.knightlab.com/docs/instantiate-a-timeline.html
        // option: https://timeline.knightlab.com/docs/options.html

/////--------------------------------------------------------------------------------------------------------------------------------//////////////////////
//         var lang = 'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml'.match(/&lang=([a-zA-Z]*)&?/);
//
//         if (lang) {
//             document.getElementsByTagName('html')[0].setAttribute('lang', lang[1]);
//         }
//         var trim_point = window.location.href.indexOf('embed/index.html');
//         if (trim_point > 0) {
//             var embed_path = window.location.href.substring(0,trim_point); // supports https access via https://s3.amazonaws.com/cdn.knightlab.com/libs/timeline/latest/embed/index.html
//         } else {
//             var embed_path = "https://cdn.knightlab.com/libs/timeline3/latest/";
//         }
//         var oembed_link = document.createElement('link');
//         oembed_link['rel'] = 'alternate';
//         oembed_link['type'] = 'application/json+oembed';
//         oembed_link['href'] = 'https://oembed.knightlab.com/timeline/?url=' + encodeURIComponent(window.location.href);
//         document.head.appendChild(oembed_link);

        const timeline = new TL.Timeline('timeline-embed', 'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml');
        return (
            <div>
                <timeline/>
            </div>
        )
    }

}

export default Main;
