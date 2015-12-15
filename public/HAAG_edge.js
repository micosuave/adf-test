/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'false',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'R13',
                type: 'rect',
                rect: ['660', '463','auto','auto','auto', 'auto'],
                userClass: "draggable"
            },
            {
                id: 'R12',
                type: 'rect',
                rect: ['56.1%', '65.7%','auto','auto','auto', 'auto'],
                userClass: "draggable"
            },
            {
                id: 'R11',
                type: 'rect',
                rect: ['62.2%', '67.4%','auto','auto','auto', 'auto'],
                userClass: "draggable"
            },
            {
                id: 'R10',
                type: 'rect',
                rect: ['29', '30','auto','auto','auto', 'auto'],
                userClass: "draggable"
            },
            {
                id: 'R9',
                type: 'rect',
                rect: ['263', '38','auto','auto','auto', 'auto'],
                userClass: "draggable"
            },
            {
                id: 'R8',
                type: 'rect',
                rect: ['29', '30','auto','auto','auto', 'auto'],
                userClass: "draggable"
            },
            {
                id: 'R7',
                type: 'rect',
                rect: ['263', '38','auto','auto','auto', 'auto'],
                userClass: "draggable"
            },
            {
                id: 'R6',
                type: 'rect',
                rect: ['48.1%', '64.4%','auto','auto','auto', 'auto'],
                userClass: "draggable"
            },
            {
                id: 'R5',
                type: 'rect',
                rect: ['29', '30','auto','auto','auto', 'auto'],
                userClass: "draggable"
            },
            {
                id: 'R4',
                type: 'rect',
                rect: ['263', '38','auto','auto','auto', 'auto'],
                userClass: "ui-widget-content"
            },
            {
                id: 'R3',
                type: 'rect',
                rect: ['29', '30','auto','auto','auto', 'auto'],
                userClass: "ui-widget-content"
            },
            {
                id: 'R2',
                type: 'rect',
                rect: ['263', '38','auto','auto','auto', 'auto'],
                userClass: "ui-widget-content"
            },
            {
                id: 'R1',
                type: 'rect',
                rect: ['29', '30','auto','auto','auto', 'auto'],
                userClass: "ui-widget-content"
            }],
            symbolInstances: [
            {
                id: 'R1',
                symbolName: 'HAAG-Box-Template',
                autoPlay: {

                }
            },
            {
                id: 'R11',
                symbolName: 'graybox_1',
                autoPlay: {

                }
            },
            {
                id: 'R7',
                symbolName: 'HAAG-Box-Template_1',
                autoPlay: {

                }
            },
            {
                id: 'R13',
                symbolName: 'HAAG-Box-Template_2_1',
                autoPlay: {

                }
            },
            {
                id: 'R3',
                symbolName: 'HAAG-Box-Template',
                autoPlay: {

                }
            },
            {
                id: 'R5',
                symbolName: 'HAAG-Box-Template',
                autoPlay: {

                }
            },
            {
                id: 'R4',
                symbolName: 'HAAG-Box-Template_1',
                autoPlay: {

                }
            },
            {
                id: 'R8',
                symbolName: 'HAAG-Box-Template',
                autoPlay: {

                }
            },
            {
                id: 'R9',
                symbolName: 'HAAG-Box-Template_1',
                autoPlay: {

                }
            },
            {
                id: 'R6',
                symbolName: 'graybox_1',
                autoPlay: {

                }
            },
            {
                id: 'R10',
                symbolName: 'HAAG-Box-Template',
                autoPlay: {

                }
            },
            {
                id: 'R2',
                symbolName: 'HAAG-Box-Template_1',
                autoPlay: {

                }
            },
            {
                id: 'R12',
                symbolName: 'graybox_1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_R1}": [
                ["style", "top", '30px'],
                ["style", "left", '19px']
            ],
            "${_R3}": [
                ["style", "top", '30px'],
                ["style", "left", '512px']
            ],
            "${_R11}": [
                ["style", "top", '30.33%'],
                ["transform", "scaleX", '0.9'],
                ["transform", "scaleY", '0.9'],
                ["style", "left", '59.54%']
            ],
            "${_R13}": [
                ["style", "left", '835px'],
                ["style", "top", '382px']
            ],
            "${_R12}": [
                ["style", "top", '30.33%'],
                ["transform", "scaleX", '0.9'],
                ["transform", "scaleY", '0.9'],
                ["style", "left", '69.91%']
            ],
            "${_R8}": [
                ["style", "top", '370px'],
                ["style", "left", '19px']
            ],
            "${_R7}": [
                ["style", "left", '389px'],
                ["style", "top", '202px']
            ],
            "${_R6}": [
                ["style", "top", '30.33%'],
                ["transform", "scaleX", '0.9'],
                ["transform", "scaleY", '0.9'],
                ["style", "left", '25.28%']
            ],
            "${_R9}": [
                ["style", "left", '266px'],
                ["style", "top", '370px']
            ],
            "${_R4}": [
                ["style", "left", '759px'],
                ["style", "top", '30px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '600px'],
                ["style", "overflow", 'scroll'],
                ["style", "height", '600px'],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(57,231,232,0.02)',7],['rgba(3,3,3,0.01)',77]]]],
                ["style", "max-width", '1080px'],
                ["style", "width", '1180px']
            ],
            "${_R5}": [
                ["style", "top", '202px'],
                ["style", "left", '19px']
            ],
            "${_R2}": [
                ["style", "left", '266px'],
                ["style", "top", '30px']
            ],
            "${_R10}": [
                ["style", "top", '370px'],
                ["style", "left", '512px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
                { id: "eid2196", tween: [ "style", "${_R13}", "left", '835px', { fromValue: '835px'}], position: 0, duration: 0 },
                { id: "eid2197", tween: [ "style", "${_R13}", "top", '382px', { fromValue: '382px'}], position: 0, duration: 0 }            ]
        }
    }
},
"redbox_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    id: 'SummaryBox2',
                    type: 'rect',
                    rect: ['25', '25', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', [80, '%'], 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'DateText',
                    text: 'YYYY-MM-DD FOAM',
                    align: 'left',
                    rect: ['38px', '10px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'RBox',
                    type: 'rect',
                    rect: ['2', '1', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'RBox',
                symbolName: 'RBox',
                autoPlay: {

               }
            },
            {
                id: 'SummaryBox2',
                symbolName: 'SummaryBoxRed',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_DateTextCopy2}": [
                ["style", "top", '-17px'],
                ["style", "left", '11px'],
                ["style", "font-size", '80%']
            ],
            "${symbolSelector}": [
                ["style", "height", '132px'],
                ["style", "width", '209px']
            ],
            "${_SummaryTextCopy2}": [
                ["style", "letter-spacing", '0em'],
                ["transform", "scaleX", '0.89'],
                ["style", "left", '5px'],
                ["style", "font-size", '68.6%'],
                ["style", "top", '11px'],
                ["style", "width", '170px'],
                ["transform", "scaleY", '0.84'],
                ["style", "height", '81px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "word-spacing", '0em'],
                ["color", "color", 'rgba(135,7,7,1.00)']
            ],
            "${_DateTextCopy}": [
                ["style", "top", '-17px'],
                ["style", "left", '11px'],
                ["style", "font-size", '80%']
            ],
            "${_SummaryTextCopy}": [
                ["style", "letter-spacing", '0em'],
                ["transform", "scaleX", '0.89'],
                ["style", "left", '5px'],
                ["style", "font-size", '68.6%'],
                ["style", "top", '11px'],
                ["style", "width", '170px'],
                ["transform", "scaleY", '0.84'],
                ["style", "height", '81px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "word-spacing", '0em'],
                ["color", "color", 'rgba(135,7,7,1.00)']
            ],
            "${_DateText}": [
                ["style", "top", '10px'],
                ["style", "left", '38px'],
                ["style", "font-size", '80%']
            ],
            "${_SummaryBox2}": [
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.43)'],
                ["subproperty", "filter.drop-shadow.offsetH", '3px'],
                ["subproperty", "filter.drop-shadow.offsetV", '3px'],
                ["subproperty", "filter.drop-shadow.blur", '1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1013,
            autoPlay: false,
            timeline: [
                { id: "eid1674", tween: [ "subproperty", "${_SummaryBox2}", "filter.drop-shadow.color", 'rgba(0,0,0,0.43)', { fromValue: 'rgba(0,0,0,0.43)'}], position: 0, duration: 0 },
                { id: "eid446", tween: [ "style", "${symbolSelector}", "width", '226px', { fromValue: '209px'}], position: 0, duration: 1013 },
                { id: "eid1675", tween: [ "subproperty", "${_SummaryBox2}", "filter.drop-shadow.offsetH", '8px', { fromValue: '3px'}], position: 0, duration: 500 },
                { id: "eid1677", tween: [ "subproperty", "${_SummaryBox2}", "filter.drop-shadow.blur", '6px', { fromValue: '1px'}], position: 0, duration: 500 },
                { id: "eid444", tween: [ "style", "${symbolSelector}", "height", '135px', { fromValue: '132px'}], position: 0, duration: 1000 },
                { id: "eid1676", tween: [ "subproperty", "${_SummaryBox2}", "filter.drop-shadow.offsetV", '8px', { fromValue: '3px'}], position: 0, duration: 500 }            ]
        }
    }
},
"Matrix": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'greenbox_12',
                    type: 'rect',
                    rect: ['80.4%', '70.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'graybox_15',
                    type: 'rect',
                    rect: ['56.1%', '65.7%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'graybox_14',
                    type: 'rect',
                    rect: ['62.2%', '67.4%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Symbol_R5',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['0%', '39.9%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'redbox_24',
                    type: 'rect',
                    rect: ['33.9%', '63%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Symbol_R7',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['0%', '85.9%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'redbox_22',
                    type: 'rect',
                    rect: ['3.7%', '35.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'graybox_13',
                    type: 'rect',
                    rect: ['48.1%', '64.4%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Symbol_R9',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['31.1%', '39%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'redbox_2',
                    type: 'rect',
                    rect: ['68.1%', '36.9%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Symbol_R3',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['37.6%', '5.5%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'redbox_23',
                    type: 'rect',
                    rect: ['34.8%', '7.6%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Symbol_2',
                    type: 'rect',
                    rect: ['0%', '1.1%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'Symbol_R9',
                symbolName: 'redbox_1',
                autoPlay: {

               }
            },
            {
                id: 'greenbox_12',
                symbolName: 'greenbox_1',
                autoPlay: {

               }
            },
            {
                id: 'graybox_15',
                symbolName: 'graybox_1',
                autoPlay: {

               }
            },
            {
                id: 'graybox_13',
                symbolName: 'graybox_1',
                autoPlay: {

               }
            },
            {
                id: 'Symbol_R5',
                symbolName: 'redbox_1',
                autoPlay: {

               }
            },
            {
                id: 'redbox_24',
                symbolName: 'whitebox_2',
                autoPlay: {

               }
            },
            {
                id: 'graybox_14',
                symbolName: 'graybox_1',
                autoPlay: {

               }
            },
            {
                id: 'redbox_23',
                symbolName: 'whitebox_2',
                autoPlay: {

               }
            },
            {
                id: 'redbox_2',
                symbolName: 'whitebox_2',
                autoPlay: {

               }
            },
            {
                id: 'Symbol_R3',
                symbolName: 'redbox_1',
                autoPlay: {

               }
            },
            {
                id: 'Symbol_R7',
                symbolName: 'redbox_1',
                autoPlay: {

               }
            },
            {
                id: 'redbox_22',
                symbolName: 'whitebox_2',
                autoPlay: {

               }
            },
            {
                id: 'Symbol_2',
                symbolName: 'Symbol_2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_redbox_24}": [
                ["transform", "scaleX", '0.9'],
                ["style", "top", '62.99%'],
                ["style", "left", '0.83%'],
                ["transform", "scaleY", '0.9']
            ],
            "${_Symbol_R5}": [
                ["style", "top", '63.01%'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "skewY", '0deg'],
                ["transform", "skewX", '0deg'],
                ["transform", "scaleX", '0.9'],
                ["style", "left", '20.7%'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleY", '0.9']
            ],
            "${_graybox_15}": [
                ["transform", "scaleX", '0.9'],
                ["style", "top", '62.99%'],
                ["style", "left", '50.53%'],
                ["transform", "scaleY", '0.9']
            ],
            "${_redbox_2}": [
                ["transform", "scaleX", '0.9'],
                ["style", "top", '3.31%'],
                ["style", "left", '67.19%'],
                ["transform", "scaleY", '0.9']
            ],
            "${_redbox_23}": [
                ["transform", "scaleX", '0.9'],
                ["style", "top", '3.31%'],
                ["style", "left", '22.46%'],
                ["transform", "scaleY", '0.9']
            ],
            "${_Symbol_R7}": [
                ["style", "top", '32.29%'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "skewY", '0deg'],
                ["transform", "skewX", '0deg'],
                ["transform", "scaleX", '0.9'],
                ["style", "left", '56.23%'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleY", '0.9']
            ],
            "${_redbox_22}": [
                ["transform", "scaleX", '0.9'],
                ["style", "top", '32.31%'],
                ["style", "left", '36.86%'],
                ["transform", "scaleY", '0.9']
            ],
            "${_graybox_13}": [
                ["transform", "scaleX", '0.9'],
                ["style", "top", '32.28%'],
                ["style", "left", '28.33%'],
                ["transform", "scaleY", '0.9']
            ],
            "${_Symbol_R9}": [
                ["style", "top", '32.28%'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "skewY", '0deg'],
                ["transform", "skewX", '0deg'],
                ["transform", "scaleX", '0.9'],
                ["style", "left", '7.89%'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleY", '0.9']
            ],
            "${symbolSelector}": [
                ["style", "height", '635px'],
                ["style", "width", '1140px'],
                ["style", "min-width", '600px'],
                ["style", "overflow", 'visible']
            ],
            "${_greenbox_12}": [
                ["transform", "scaleX", '0.9'],
                ["style", "top", '62.99%'],
                ["style", "left", '61.4%'],
                ["transform", "scaleY", '0.9']
            ],
            "${_Symbol_2}": [
                ["transform", "scaleX", '0.9'],
                ["transform", "scaleY", '0.9'],
                ["style", "top", '3.31%']
            ],
            "${_Symbol_R3}": [
                ["style", "top", '3.3%'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "skewY", '0deg'],
                ["transform", "skewX", '0deg'],
                ["transform", "scaleX", '0.9'],
                ["style", "left", '45%'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleY", '0.9']
            ],
            "${_graybox_14}": [
                ["transform", "scaleX", '0.9'],
                ["style", "top", '62.99%'],
                ["style", "left", '41.23%'],
                ["transform", "scaleY", '0.9']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid529", tween: [ "style", "${_Symbol_2}", "top", '3.31%', { fromValue: '3.31%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid591", tween: [ "style", "${_Symbol_R9}", "top", '32.28%', { fromValue: '32.28%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid627", tween: [ "style", "${_greenbox_12}", "top", '62.99%', { fromValue: '62.99%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid646", tween: [ "transform", "${_Symbol_R7}", "scaleX", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid555", tween: [ "style", "${_redbox_24}", "left", '0.83%', { fromValue: '0.83%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid595", tween: [ "style", "${_graybox_14}", "top", '62.99%', { fromValue: '62.99%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid545", tween: [ "style", "${_redbox_2}", "top", '3.31%', { fromValue: '3.31%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid648", tween: [ "transform", "${_graybox_15}", "scaleX", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid759", tween: [ "style", "${_redbox_2}", "left", '67.19%', { fromValue: '67.19%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid530", tween: [ "style", "${_redbox_23}", "top", '3.31%', { fromValue: '3.31%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid546", tween: [ "style", "${_redbox_22}", "top", '32.31%', { fromValue: '32.31%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid761", tween: [ "style", "${_Symbol_R3}", "left", '45%', { fromValue: '45%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid559", tween: [ "style", "${_redbox_24}", "top", '62.99%', { fromValue: '62.99%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid777", tween: [ "style", "${_graybox_15}", "left", '50.53%', { fromValue: '50.53%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid661", tween: [ "transform", "${_Symbol_R5}", "scaleY", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid660", tween: [ "transform", "${_Symbol_R5}", "scaleX", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid665", tween: [ "transform", "${_redbox_24}", "scaleY", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid624", tween: [ "style", "${_graybox_15}", "top", '62.99%', { fromValue: '62.99%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid764", tween: [ "style", "${_redbox_23}", "left", '22.46%', { fromValue: '22.46%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid550", tween: [ "style", "${_redbox_22}", "left", '36.86%', { fromValue: '36.86%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid543", tween: [ "style", "${_Symbol_R3}", "top", '3.3%', { fromValue: '3.3%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid780", tween: [ "style", "${_graybox_14}", "left", '41.23%', { fromValue: '41.23%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid643", tween: [ "transform", "${_redbox_2}", "scaleY", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid653", tween: [ "transform", "${_graybox_14}", "scaleY", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid654", tween: [ "transform", "${_redbox_22}", "scaleX", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid551", tween: [ "style", "${_Symbol_R7}", "top", '32.29%', { fromValue: '32.29%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid664", tween: [ "transform", "${_redbox_24}", "scaleX", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid640", tween: [ "transform", "${_Symbol_R3}", "scaleX", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid558", tween: [ "style", "${_Symbol_R5}", "top", '63.01%', { fromValue: '63.01%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid657", tween: [ "transform", "${_graybox_13}", "scaleY", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid766", tween: [ "style", "${_Symbol_R7}", "left", '56.23%', { fromValue: '56.23%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid728", tween: [ "style", "${symbolSelector}", "width", '1140px', { fromValue: '1140px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid651", tween: [ "transform", "${_Symbol_2}", "scaleY", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid650", tween: [ "transform", "${_Symbol_2}", "scaleX", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid593", tween: [ "style", "${_graybox_13}", "top", '32.28%', { fromValue: '32.28%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid652", tween: [ "transform", "${_graybox_14}", "scaleX", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid767", tween: [ "style", "${_Symbol_R5}", "left", '20.7%', { fromValue: '20.7%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid645", tween: [ "transform", "${_Symbol_R9}", "scaleY", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid641", tween: [ "transform", "${_Symbol_R3}", "scaleY", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid642", tween: [ "transform", "${_redbox_2}", "scaleX", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid662", tween: [ "transform", "${_redbox_23}", "scaleX", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid656", tween: [ "transform", "${_graybox_13}", "scaleX", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid649", tween: [ "transform", "${_graybox_15}", "scaleY", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid592", tween: [ "style", "${_graybox_13}", "left", '28.33%', { fromValue: '28.33%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid659", tween: [ "transform", "${_greenbox_12}", "scaleY", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid644", tween: [ "transform", "${_Symbol_R9}", "scaleX", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid658", tween: [ "transform", "${_greenbox_12}", "scaleX", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid647", tween: [ "transform", "${_Symbol_R7}", "scaleY", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid590", tween: [ "style", "${_Symbol_R9}", "left", '7.89%', { fromValue: '7.89%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid663", tween: [ "transform", "${_redbox_23}", "scaleY", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid73", tween: [ "color", "${symbolSelector}", "background-color", 'rgba(0,0,0,0)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0)'}], position: 1000, duration: 0 },
                { id: "eid775", tween: [ "style", "${_greenbox_12}", "left", '61.4%', { fromValue: '61.4%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid655", tween: [ "transform", "${_redbox_22}", "scaleY", '0.9', { fromValue: '0.9'}], position: 0, duration: 0, easing: "easeInOutQuad" }            ]
        }
    }
},
"whitebluebox_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    rect: ['25px', '25px', '339px', '182px', 'auto', 'auto'],
                    borderRadius: ['52.33px 41.39px', '52.33px 41.39px', '52.33px 41.39px', '52.33px 41.39px'],
                    fill: ['rgba(255,201,201,1.00)'],
                    id: 'RoundRect2',
                    stroke: [5, 'rgba(255,31,23,1.00)', 'solid'],
                    type: 'rect',
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                    c: [
                    {
                        rect: ['38px', '39px', '263px', '105px', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', [100, '%'], 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        id: 'Text',
                        text: 'This is sample text. ',
                        align: 'justify',
                        type: 'text'
                    },
                    {
                        rect: ['12px', '-22px', 'auto', 'auto', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', [80, '%'], 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                        id: 'Text4',
                        text: 'YYYY-MM-DD FOAM',
                        align: 'left',
                        type: 'text'
                    }]
                },
                {
                    type: 'rect',
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    id: 'RoundRect',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    rect: ['0px', '0px', '25px', '25px', 'auto', 'auto'],
                    fill: ['rgba(254,203,166,1.00)'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                    c: [
                    {
                        rect: ['6px', '7px', 'auto', 'auto', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', [68.75, '%'], 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                        id: 'Text3',
                        text: 'R#',
                        align: 'justify',
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(254,203,166,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["subproperty", "boxShadow.inset", ''],
                ["style", "cursor", 'pointer'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)']
            ],
            "${_Text}": [
                ["style", "top", '11px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '81px'],
                ["style", "width", '170px'],
                ["style", "left", '5px'],
                ["style", "font-size", '68.6%']
            ],
            "${_RoundRect2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '25px'],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '180px'],
                ["style", "top", '25px'],
                ["style", "border-bottom-left-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '2px'],
                ["color", "border-color", 'rgba(0,5,205,1.00)'],
                ["style", "height", '101px'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)']
            ],
            "${_Text3}": [
                ["style", "top", '7px'],
                ["style", "left", '6px'],
                ["style", "font-size", '68.75%']
            ],
            "${symbolSelector}": [
                ["style", "height", '130px'],
                ["style", "width", '209px']
            ],
            "${_Text4}": [
                ["style", "top", '-22px'],
                ["style", "left", '12px'],
                ["style", "font-size", '80%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid28", tween: [ "style", "${_Text}", "width", '334px', { fromValue: '170px'}], position: 0, duration: 1000 },
                { id: "eid134", tween: [ "color", "${_RoundRect2}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text}", "top", '12px', { fromValue: '11px'}], position: 0, duration: 1000 },
                { id: "eid33", tween: [ "style", "${_RoundRect2}", "border-top-left-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 0, duration: 996 },
                { id: "eid3", tween: [ "style", "${_RoundRect2}", "height", '186px', { fromValue: '101px'}], position: 0, duration: 1000 },
                { id: "eid29", tween: [ "style", "${_Text}", "left", '6px', { fromValue: '5px'}], position: 0, duration: 1000 },
                { id: "eid27", tween: [ "style", "${_Text}", "height", '165px', { fromValue: '81px'}], position: 0, duration: 1000 },
                { id: "eid31", tween: [ "style", "${_Text}", "font-size", '96.9%', { fromValue: '68.6%'}], position: 0, duration: 1000 },
                { id: "eid34", tween: [ "style", "${_RoundRect2}", "border-top-right-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 0, duration: 996 },
                { id: "eid4", tween: [ "style", "${_RoundRect2}", "width", '345px', { fromValue: '180px'}], position: 0, duration: 1000 },
                { id: "eid32", tween: [ "style", "${_RoundRect2}", "border-bottom-left-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 0, duration: 996 },
                { id: "eid135", tween: [ "color", "${_RoundRect2}", "border-color", 'rgba(0,5,205,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,5,205,1.00)'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_RoundRect2}", "border-bottom-right-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 0, duration: 996 },
                { id: "eid6", tween: [ "style", "${_RoundRect2}", "border-width", '2px', { fromValue: '2px'}], position: 0, duration: 0 }            ]
        }
    }
},
"HomeButton": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'Untitled-42',
                    opacity: 1,
                    rect: ['0px', '0px', '106px', '120px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Untitled-42.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Untitled-42}": [
                ["style", "top", '0px'],
                ["style", "height", '84px'],
                ["style", "opacity", '0.49'],
                ["style", "left", '0px'],
                ["style", "width", '75px']
            ],
            "${symbolSelector}": [
                ["style", "height", '75px'],
                ["style", "width", '75px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            timeline: [
                { id: "eid236", tween: [ "style", "${_Untitled-42}", "height", '84px', { fromValue: '84px'}], position: 0, duration: 0 },
                { id: "eid237", tween: [ "style", "${_Untitled-42}", "width", '75px', { fromValue: '75px'}], position: 0, duration: 0 },
                { id: "eid233", tween: [ "style", "${_Untitled-42}", "opacity", '1', { fromValue: '0.49'}], position: 0, duration: 250 }            ]
        }
    }
},
"Symbol_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.02', '0.02']],
                    rect: ['-873px', '-1148px', '1920px', '2401px', 'auto', 'auto'],
                    display: 'none',
                    id: 'BlueLion',
                    opacity: 0.50307160615921,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/BlueLion.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_BlueLion}": [
                ["style", "top", '-1176px'],
                ["transform", "scaleY", '0.02'],
                ["subproperty", "filter.hue-rotate", '0deg'],
                ["transform", "scaleX", '0.02'],
                ["style", "opacity", '0.06023000180721283'],
                ["style", "left", '-941px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '48px'],
                ["style", "width", '38px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: true,
            labels: {
                "stop": 1013,
                "hover": 1250
            },
            timeline: [
                { id: "eid476", tween: [ "style", "${_BlueLion}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "easeOutQuad" },
                { id: "eid475", tween: [ "style", "${_BlueLion}", "display", 'block', { fromValue: 'block'}], position: 1013, duration: 0, easing: "easeOutQuad" },
                { id: "eid483", tween: [ "style", "${_BlueLion}", "left", '-867px', { fromValue: '-941px'}], position: 1000, duration: 0, easing: "easeOutQuad" },
                { id: "eid485", tween: [ "style", "${_BlueLion}", "opacity", '0.23597756410256', { fromValue: '0.06023000180721283'}], position: 750, duration: 250, easing: "easeInOutQuad" },
                { id: "eid488", tween: [ "style", "${_BlueLion}", "opacity", '1', { fromValue: '0.23597800731658936'}], position: 1000, duration: 250, easing: "easeInOutQuad" },
                { id: "eid484", tween: [ "style", "${_BlueLion}", "top", '-1147px', { fromValue: '-1176px'}], position: 1000, duration: 0, easing: "easeOutQuad" },
                { id: "eid491", tween: [ "subproperty", "${_BlueLion}", "filter.hue-rotate", '317deg', { fromValue: '0deg'}], position: 1007, duration: 243, easing: "easeInOutQuad" }            ]
        }
    }
},
"Symbol_2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Symbol_R1',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['0%', '-1%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'Symbol_R1',
                symbolName: 'redbox_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '132px'],
                ["style", "width", '209px']
            ],
            "${_Symbol_R1}": [
                ["style", "top", '0%'],
                ["transform", "skewY", '0deg'],
                ["transform", "rotateZ", '0deg'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0%'],
                ["transform", "skewX", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"Symbol_3": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Symbol_R1',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['0%', '-1%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'Symbol_R1',
                symbolName: 'redbox_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '132px'],
                ["style", "width", '209px']
            ],
            "${_Symbol_R1}": [
                ["style", "top", '0%'],
                ["transform", "skewY", '0deg'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "skewX", '0deg'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"whitebox_2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    rect: ['25px', '25px', '339px', '182px', 'auto', 'auto'],
                    borderRadius: ['52.33px 41.39px', '52.33px 41.39px', '52.33px 41.39px', '52.33px 41.39px'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                    id: 'SummaryBox',
                    stroke: [5, 'rgba(255,31,23,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,201,201,1.00)'],
                    c: [
                    {
                        type: 'text',
                        rect: ['10px', '-17px', 'auto', 'auto', 'auto', 'auto'],
                        filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                        id: 'DateText',
                        text: 'YYYY-MM-DD FOAM',
                        align: 'left',
                        font: ['Arial, Helvetica, sans-serif', [80, '%'], 'rgba(0,0,0,1)', '400', 'none', 'normal']
                    },
                    {
                        type: 'text',
                        rect: ['38px', '39px', '263px', '105px', 'auto', 'auto'],
                        align: 'right',
                        id: 'SummaryText',
                        text: 'I\'m open and in front.',
                        textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                        font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [100, '%'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    }]
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.02', '0.02']],
                    rect: ['-873px', '-1148px', '1920px', '2401px', 'auto', 'auto'],
                    id: 'BlueLion',
                    opacity: 0.50307160615921,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/BlueLion.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    id: 'RnumberBox',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    rect: ['2px', '1px', '25px', '25px', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0.34)', -3, 3, 2],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                    fill: ['rgba(254,203,166,1.00)'],
                    c: [
                    {
                        type: 'text',
                        rect: ['6px', '7px', 'auto', 'auto', 'auto', 'auto'],
                        filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                        id: 'RnumberText',
                        text: 'R#',
                        align: 'justify',
                        font: ['Arial, Helvetica, sans-serif', [68.75, '%'], 'rgba(0,0,0,1)', '400', 'none', 'normal']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RnumberBox}": [
                ["style", "-webkit-transform-origin", [50,41], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["subproperty", "boxShadow.inset", ''],
                ["style", "left", '2px'],
                ["subproperty", "filter.drop-shadow.blur", '2px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["color", "background-color", 'rgba(254,203,166,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "filter.drop-shadow.offsetH", '-3px'],
                ["style", "top", '1px'],
                ["subproperty", "filter.drop-shadow.offsetV", '3px'],
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.34)'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "cursor", 'pointer']
            ],
            "${_BlueLion}": [
                ["style", "top", '-1016px'],
                ["transform", "scaleY", '0.02'],
                ["transform", "scaleX", '0.02'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-615px'],
                ["subproperty", "filter.hue-rotate", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '132px'],
                ["style", "width", '209px']
            ],
            "${_RnumberText}": [
                ["style", "top", '7px'],
                ["style", "left", '6px'],
                ["style", "font-size", '68.75%']
            ],
            "${_SummaryBox}": [
                ["style", "left", '25px'],
                ["subproperty", "filter.drop-shadow.blur", '3px'],
                ["style", "border-bottom-left-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.36)'],
                ["style", "border-top-left-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '180px'],
                ["style", "top", '25px'],
                ["subproperty", "filter.drop-shadow.offsetH", '-3px'],
                ["subproperty", "filter.drop-shadow.offsetV", '3px'],
                ["color", "background-color", 'rgba(249,249,249,1.00)'],
                ["style", "height", '101px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "border-top-right-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "border-color", 'rgba(0,47,94,1.00)']
            ],
            "${_SummaryText}": [
                ["color", "color", 'rgba(13,7,135,1.00)'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "left", '5px'],
                ["transform", "scaleY", '0.84'],
                ["style", "font-style", 'normal'],
                ["style", "word-spacing", '0em'],
                ["subproperty", "textShadow.blur", '3px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["transform", "scaleX", '0.89'],
                ["style", "width", '170px'],
                ["style", "top", '11px'],
                ["style", "text-align", 'right'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0)'],
                ["style", "height", '81px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "letter-spacing", '0em'],
                ["style", "font-size", '68.6%']
            ],
            "${_DateText}": [
                ["style", "top", '-17px'],
                ["style", "left", '10px'],
                ["style", "font-size", '80%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1013,
            autoPlay: false,
            timeline: [
                { id: "eid28", tween: [ "style", "${_SummaryText}", "width", '334px', { fromValue: '170px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid3", tween: [ "style", "${_SummaryBox}", "height", '186px', { fromValue: '101px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid523", tween: [ "color", "${_SummaryText}", "color", 'rgba(210,210,210,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(13,7,135,1.00)'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid498", tween: [ "style", "${_BlueLion}", "opacity", '0.15', { fromValue: '0'}], position: 897, duration: 116, easing: "easeInOutQuad" },
                { id: "eid511", tween: [ "subproperty", "${_SummaryText}", "textShadow.offsetV", '3px', { fromValue: '3px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid510", tween: [ "subproperty", "${_SummaryText}", "textShadow.offsetH", '3px', { fromValue: '3px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid486", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.color", 'rgba(0,0,0,0.20)', { fromValue: 'rgba(0,0,0,0.36)'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid522", tween: [ "style", "${_BlueLion}", "top", '-1016px', { fromValue: '-1016px'}], position: 1013, duration: 0, easing: "easeInOutQuad" },
                { id: "eid34", tween: [ "style", "${_SummaryBox}", "border-top-right-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid29", tween: [ "style", "${_SummaryText}", "left", '2px', { fromValue: '5px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid31", tween: [ "style", "${_SummaryText}", "font-size", '119.9%', { fromValue: '68.6%'}], position: 750, duration: 263 },
                { id: "eid447", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.offsetH", '-22px', { fromValue: '-3px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid496", tween: [ "style", "${_BlueLion}", "display", 'block', { fromValue: 'none'}], position: 897, duration: 0, easing: "easeOutQuad" },
                { id: "eid497", tween: [ "style", "${_BlueLion}", "display", 'block', { fromValue: 'block'}], position: 1013, duration: 0, easing: "easeOutQuad" },
                { id: "eid527", tween: [ "color", "${_SummaryBox}", "border-color", 'rgba(0,47,94,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,47,94,1.00)'}], position: 0, duration: 0 },
                { id: "eid521", tween: [ "style", "${_BlueLion}", "left", '-615px', { fromValue: '-615px'}], position: 1013, duration: 0, easing: "easeInOutQuad" },
                { id: "eid494", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.offsetV", '-20px', { fromValue: '3px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid449", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.blur", '8px', { fromValue: '3px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid30", tween: [ "style", "${_SummaryText}", "top", '5px', { fromValue: '11px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid446", tween: [ "style", "${symbolSelector}", "width", '381px', { fromValue: '209px'}], position: 0, duration: 1013 },
                { id: "eid35", tween: [ "style", "${_SummaryBox}", "border-bottom-right-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid4", tween: [ "style", "${_SummaryBox}", "width", '345px', { fromValue: '180px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid514", tween: [ "subproperty", "${_SummaryText}", "textShadow.color", 'rgba(0,0,0,0.28)', { fromValue: 'rgba(0,0,0,0)'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid32", tween: [ "style", "${_SummaryBox}", "border-bottom-left-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid6", tween: [ "style", "${_SummaryBox}", "border-width", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_SummaryBox}", "border-top-left-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid27", tween: [ "style", "${_SummaryText}", "height", '165px', { fromValue: '81px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid444", tween: [ "style", "${symbolSelector}", "height", '226px', { fromValue: '132px'}], position: 0, duration: 1000 },
                { id: "eid525", tween: [ "color", "${_SummaryBox}", "background-color", 'rgba(249,249,249,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(249,249,249,1.00)'}], position: 0, duration: 0 }            ]
        }
    }
},
"greenbox_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    rect: ['25px', '25px', '339px', '182px', 'auto', 'auto'],
                    borderRadius: ['52.33px 41.39px', '52.33px 41.39px', '52.33px 41.39px', '52.33px 41.39px'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                    id: 'SummaryBox',
                    stroke: [5, 'rgba(255,31,23,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,201,201,1.00)'],
                    c: [
                    {
                        type: 'text',
                        rect: ['6px', '-17px', 'auto', 'auto', 'auto', 'auto'],
                        filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                        id: 'DateText',
                        text: 'YYYY-MM-DD FOAM',
                        align: 'left',
                        font: ['Arial, Helvetica, sans-serif', [80, '%'], 'rgba(0,0,0,1)', '400', 'none', 'normal']
                    },
                    {
                        type: 'text',
                        id: 'SummaryText',
                        text: '',
                        userClass: 'html',
                        align: 'right',
                        rect: ['38px', '39px', '263px', '105px', 'auto', 'auto'],
                        font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [100, '%'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                        tag: 'pre'
                    }]
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.02', '0.02']],
                    rect: ['-873px', '-1148px', '1920px', '2401px', 'auto', 'auto'],
                    id: 'BlueLion',
                    opacity: 0.50307160615921,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/BlueLion.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    id: 'RnumberBox',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    rect: ['2px', '1px', '25px', '25px', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0.34)', -3, 3, 2],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                    fill: ['rgba(254,203,166,1.00)'],
                    c: [
                    {
                        type: 'text',
                        rect: ['6px', '7px', 'auto', 'auto', 'auto', 'auto'],
                        filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                        id: 'RnumberText',
                        text: 'R#',
                        align: 'justify',
                        font: ['Arial, Helvetica, sans-serif', [68.75, '%'], 'rgba(0,0,0,1)', '400', 'none', 'normal']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RnumberBox}": [
                ["style", "-webkit-transform-origin", [50,41], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["subproperty", "boxShadow.inset", ''],
                ["style", "left", '2px'],
                ["subproperty", "filter.drop-shadow.blur", '2px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.34)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "filter.drop-shadow.offsetH", '-3px'],
                ["style", "top", '1px'],
                ["style", "cursor", 'pointer'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["color", "background-color", 'rgba(254,203,166,1.00)'],
                ["subproperty", "filter.drop-shadow.offsetV", '3px']
            ],
            "${_RnumberText}": [
                ["style", "top", '7px'],
                ["style", "left", '6px'],
                ["style", "font-size", '68.75%']
            ],
            "${_SummaryBox}": [
                ["subproperty", "filter.drop-shadow.offsetV", '3px'],
                ["subproperty", "filter.drop-shadow.blur", '3px'],
                ["style", "border-bottom-left-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["color", "background-color", 'rgba(109,197,112,0.78)'],
                ["style", "border-top-left-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '180px'],
                ["style", "top", '25px'],
                ["color", "border-color", 'rgba(20,156,0,1.00)'],
                ["style", "border-top-right-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "height", '101px'],
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.36)'],
                ["style", "left", '25px'],
                ["subproperty", "filter.drop-shadow.offsetH", '-3px']
            ],
            "${_DateText}": [
                ["style", "top", '-17px'],
                ["style", "left", '6px'],
                ["style", "font-size", '80%']
            ],
            "${symbolSelector}": [
                ["style", "height", '132px'],
                ["style", "width", '209px']
            ],
            "${_SummaryText}": [
                ["color", "color", 'rgba(7,43,0,1.00)'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "left", '5px'],
                ["transform", "scaleY", '0.84'],
                ["style", "font-style", 'normal'],
                ["style", "word-spacing", '0em'],
                ["subproperty", "textShadow.blur", '3px'],
                ["style", "letter-spacing", '0em'],
                ["transform", "scaleX", '0.89'],
                ["style", "width", '170px'],
                ["style", "top", '11px'],
                ["style", "text-align", 'right'],
                ["style", "font-size", '68.6%'],
                ["style", "height", '81px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0)'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif']
            ],
            "${_BlueLion}": [
                ["style", "top", '-1016px'],
                ["transform", "scaleY", '0.02'],
                ["subproperty", "filter.hue-rotate", '0deg'],
                ["transform", "scaleX", '0.02'],
                ["style", "opacity", '0'],
                ["style", "left", '-615px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1013,
            autoPlay: false,
            timeline: [
                { id: "eid28", tween: [ "style", "${_SummaryText}", "width", '334px', { fromValue: '170px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid563", tween: [ "color", "${_SummaryBox}", "border-color", 'rgba(20,156,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(20,156,0,1.00)'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid523", tween: [ "color", "${_SummaryText}", "color", 'rgba(210,210,210,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(7,43,0,1.00)'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid498", tween: [ "style", "${_BlueLion}", "opacity", '0.15', { fromValue: '0'}], position: 897, duration: 116, easing: "easeInOutQuad" },
                { id: "eid562", tween: [ "color", "${_SummaryBox}", "background-color", 'rgba(109,197,112,0.78)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(109,197,112,0.78)'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid510", tween: [ "subproperty", "${_SummaryText}", "textShadow.offsetH", '3px', { fromValue: '3px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid486", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.color", 'rgba(0,0,0,0.20)', { fromValue: 'rgba(0,0,0,0.36)'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid522", tween: [ "style", "${_BlueLion}", "top", '-1016px', { fromValue: '-1016px'}], position: 1013, duration: 0, easing: "easeInOutQuad" },
                { id: "eid34", tween: [ "style", "${_SummaryBox}", "border-top-right-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid444", tween: [ "style", "${symbolSelector}", "height", '226px', { fromValue: '132px'}], position: 0, duration: 1000 },
                { id: "eid31", tween: [ "style", "${_SummaryText}", "font-size", '119.9%', { fromValue: '68.6%'}], position: 750, duration: 263 },
                { id: "eid27", tween: [ "style", "${_SummaryText}", "height", '165px', { fromValue: '81px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid496", tween: [ "style", "${_BlueLion}", "display", 'block', { fromValue: 'none'}], position: 897, duration: 0, easing: "easeOutQuad" },
                { id: "eid497", tween: [ "style", "${_BlueLion}", "display", 'block', { fromValue: 'block'}], position: 1013, duration: 0, easing: "easeOutQuad" },
                { id: "eid521", tween: [ "style", "${_BlueLion}", "left", '-615px', { fromValue: '-615px'}], position: 1013, duration: 0, easing: "easeInOutQuad" },
                { id: "eid6", tween: [ "style", "${_SummaryBox}", "border-width", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_SummaryBox}", "border-bottom-left-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid449", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.blur", '8px', { fromValue: '3px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid30", tween: [ "style", "${_SummaryText}", "top", '5px', { fromValue: '11px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid446", tween: [ "style", "${symbolSelector}", "width", '381px', { fromValue: '209px'}], position: 0, duration: 1013 },
                { id: "eid35", tween: [ "style", "${_SummaryBox}", "border-bottom-right-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid4", tween: [ "style", "${_SummaryBox}", "width", '345px', { fromValue: '180px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid514", tween: [ "subproperty", "${_SummaryText}", "textShadow.color", 'rgba(0,0,0,0.28)', { fromValue: 'rgba(0,0,0,0)'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid494", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.offsetV", '-20px', { fromValue: '3px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid3", tween: [ "style", "${_SummaryBox}", "height", '186px', { fromValue: '101px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid33", tween: [ "style", "${_SummaryBox}", "border-top-left-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid447", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.offsetH", '-22px', { fromValue: '-3px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid29", tween: [ "style", "${_SummaryText}", "left", '2px', { fromValue: '5px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid511", tween: [ "subproperty", "${_SummaryText}", "textShadow.offsetV", '3px', { fromValue: '3px'}], position: 0, duration: 0, easing: "easeOutQuad" }            ]
        }
    }
},
"graybox_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    id: 'GreyBox',
                    type: 'rect',
                    rect: ['19', '31', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    id: 'RnumberBox',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    rect: ['28px', '0px', '25px', '25px', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0.34)', -3, 3, 2],
                    fill: ['rgba(254,203,166,1.00)'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                    c: [
                    {
                        font: ['Arial, Helvetica, sans-serif', [68.75, '%'], 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                        type: 'text',
                        filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                        id: 'RnumberText',
                        text: 'R#',
                        align: 'justify',
                        rect: ['6px', '7px', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            {
                id: 'GreyBox',
                symbolName: 'GreyBox',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_RnumberText}": [
                ["style", "top", '7px'],
                ["style", "left", '6px'],
                ["style", "font-size", '68.75%']
            ],
            "${_RnumberBox}": [
                ["style", "-webkit-transform-origin", [50,41], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["subproperty", "boxShadow.inset", ''],
                ["style", "left", '28px'],
                ["subproperty", "filter.drop-shadow.blur", '2px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.34)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "filter.drop-shadow.offsetH", '-3px'],
                ["style", "top", '0px'],
                ["subproperty", "filter.drop-shadow.offsetV", '3px'],
                ["color", "background-color", 'rgba(254,203,166,1.00)'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "cursor", 'pointer']
            ],
            "${_GreyBox}": [
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.50)'],
                ["subproperty", "filter.drop-shadow.blur", '2px'],
                ["subproperty", "filter.drop-shadow.offsetV", '2px'],
                ["subproperty", "filter.drop-shadow.offsetH", '2px']
            ],
            "${symbolSelector}": [
                ["style", "height", '169px'],
                ["style", "width", '78px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1013,
            autoPlay: false,
            timeline: [
                { id: "eid1860", tween: [ "subproperty", "${_GreyBox}", "filter.drop-shadow.offsetV", '8px', { fromValue: '2px'}], position: 0, duration: 250 },
                { id: "eid1858", tween: [ "subproperty", "${_GreyBox}", "filter.drop-shadow.color", 'rgba(0,0,0,0.50)', { fromValue: 'rgba(0,0,0,0.50)'}], position: 250, duration: 0 },
                { id: "eid1861", tween: [ "subproperty", "${_GreyBox}", "filter.drop-shadow.blur", '8px', { fromValue: '2px'}], position: 0, duration: 250 },
                { id: "eid446", tween: [ "style", "${symbolSelector}", "width", '87px', { fromValue: '78px'}], position: 0, duration: 1013 },
                { id: "eid444", tween: [ "style", "${symbolSelector}", "height", '175px', { fromValue: '169px'}], position: 0, duration: 1000 },
                { id: "eid1859", tween: [ "subproperty", "${_GreyBox}", "filter.drop-shadow.offsetH", '8px', { fromValue: '2px'}], position: 0, duration: 250 }            ]
        }
    }
},
"Symbol_4": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [68.6, '%'], 'rgba(7,43,0,1)', '400', 'none', 'normal'],
                    id: 'Text',
                    text: '&lt;table draggable=\"auto\"  dropzone=\"copy\" onMouseDown=\"draggable()\"class=\"tg\" style=\"table-layout: fixed; width: 650px; float:right; border-width: 4px\"&gt;&lt;colgroup&gt;&lt;col style=\"width: 247px\"&gt;&lt;col style=\"width: 400px\"&gt;&lt;/colgroup&gt;&lt;tr&gt;&lt;th class=\"tg-5e45\"&gt;US Patent No.&amp;nbsp;&lt;/th&gt;&lt;th id=\"PatentNo\" class=\"tg-2jyg\"&gt;8,198,416&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td class=\"tg-zsb5\"&gt;Issued&lt;/td&gt;&lt;td id=\"Issued\" class=\"tg-lhfu\"&gt;2012-06-12&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td class=\"tg-fvbb\"&gt;Elsasser-Beile, et al,&lt;/td&gt;&lt;td class=\"tg-lhfu\"&gt;Monoclonal Antibodies and Single Chain&lt;br&gt;Antibody&amp;nbsp;Fragments Against Cell-Surface&amp;nbsp;&lt;br&gt;Prostate Specific Membrane Antigen&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td class=\"tg-zsb5\"&gt;Cls:&amp;nbsp;&lt;/td&gt;&lt;td class=\"tg-lhfu\"&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td class=\"tg-zsb5\"&gt;Specification:&amp;nbsp;&lt;/td&gt;&lt;td class=\"tg-lhfu\"&gt;20 columns + seq. listings; 21 Figures; 18 Examples&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td class=\"tg-lhfu\"&gt;Total Claims&lt;/td&gt;&lt;td class=\"tg-lhfu\"&gt;25&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td class=\"tg-zsb5\"&gt;Independent Claims&lt;/td&gt;&lt;td class=\"tg-lhfu\"&gt;1, 11, 17&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td class=\"tg-pphc\"&gt;Examiner:&amp;nbsp;&lt;/td&gt;&lt;td class=\"tg-lhfu\"&gt;Gussow&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td class=\"tg-lhfu\"&gt;Assigned on patent face to:&amp;nbsp;&lt;/td&gt;&lt;td class=\"tg-lhfu\"&gt;Univ MC Freiberg (Germany)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td class=\"tg-lhfu\"&gt;Currently Assigned to:&amp;nbsp;&lt;/td&gt;&lt;td class=\"tg-lhfu\"&gt;Univ MC Freiberg (Germany)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td class=\"tg-lhfu\"&gt;Estimated Expiration:&lt;/td&gt;&lt;td class=\"tg-lhfu\"&gt;2032-06-12&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;',
                    align: 'right',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "overflow", 'auto']
            ],
            "${symbolSelector}": [
                ["style", "height", '12px'],
                ["style", "width", '6979px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"SummaryBoxRed": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    userClass: 'summary_box',
                    borderRadius: ['52.33px 41.39px', '52.33px 41.39px', '52.33px 41.39px', '52.33px 41.39px'],
                    rect: ['0px', '0px', '339px', '182px', 'auto', 'auto'],
                    id: 'SummaryBox',
                    stroke: [5, 'rgba(255,31,23,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,201,201,1.00)'],
                    c: [
                    {
                        rect: ['38px', '39px', '263px', '105px', 'auto', 'auto'],
                        userClass: 'ui-widget-content',
                        align: 'right',
                        id: 'SummaryText',
                        text: 'SummaryText',
                        font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [100, '%'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text'
                    }]
                },
                {
                    transform: [[0, 0], [], [], ['0.02', '0.02']],
                    type: 'image',
                    display: 'none',
                    id: 'BlueLion',
                    opacity: 0.50307160615921,
                    rect: ['-873px', '-1148px', '1920px', '2401px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BlueLion.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_BlueLion}": [
                ["style", "top", '-1040px'],
                ["transform", "scaleY", '0.02'],
                ["transform", "scaleX", '0.02'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-640px'],
                ["subproperty", "filter.hue-rotate", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '105px'],
                ["style", "width", '177px']
            ],
            "${_SummaryText}": [
                ["style", "letter-spacing", '0em'],
                ["transform", "scaleX", '0.89'],
                ["color", "color", 'rgba(135,7,7,1.00)'],
                ["style", "left", '5px'],
                ["style", "width", '170px'],
                ["style", "top", '11px'],
                ["style", "text-align", 'right'],
                ["transform", "scaleY", '0.84'],
                ["style", "font-style", 'normal'],
                ["style", "height", '81px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "word-spacing", '0em'],
                ["style", "font-size", '68.6%']
            ],
            "${_SummaryBox}": [
                ["color", "background-color", 'rgba(255,201,201,1.00)'],
                ["style", "border-top-left-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '2px'],
                ["style", "border-bottom-right-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '173px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["subproperty", "filter.drop-shadow.blur", '3px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "filter.drop-shadow.offsetH", '3px'],
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.20)'],
                ["style", "height", '101px'],
                ["color", "border-color", 'rgba(255,31,23,1.00)'],
                ["style", "border-top-right-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "filter.drop-shadow.offsetV", '3px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1026,
            autoPlay: false,
            timeline: [
                { id: "eid28", tween: [ "style", "${_SummaryText}", "width", '334px', { fromValue: '170px'}], position: 0, duration: 1013 },
                { id: "eid1661", tween: [ "style", "${_BlueLion}", "left", '-640px', { fromValue: '-640px'}], position: 1026, duration: 0, easing: "easeInOutQuad" },
                { id: "eid27", tween: [ "style", "${_SummaryText}", "height", '165px', { fromValue: '81px'}], position: 0, duration: 1013 },
                { id: "eid1653", tween: [ "style", "${_BlueLion}", "opacity", '0.15', { fromValue: '0'}], position: 910, duration: 116 },
                { id: "eid1105", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.color", 'rgba(0,0,0,0.36)', { fromValue: 'rgba(0,0,0,0.20)'}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid1662", tween: [ "style", "${_BlueLion}", "top", '-1040px', { fromValue: '-1040px'}], position: 1026, duration: 0, easing: "easeInOutQuad" },
                { id: "eid34", tween: [ "style", "${_SummaryBox}", "border-top-right-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "style", "${_SummaryText}", "top", '5px', { fromValue: '11px'}], position: 0, duration: 1013 },
                { id: "eid1655", tween: [ "style", "${_BlueLion}", "display", 'block', { fromValue: 'none'}], position: 910, duration: 0, easing: "easeOutQuad" },
                { id: "eid1656", tween: [ "style", "${_BlueLion}", "display", 'block', { fromValue: 'block'}], position: 1026, duration: 0, easing: "easeOutQuad" },
                { id: "eid1515", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.blur", '8px', { fromValue: '3px'}], position: 0, duration: 1026, easing: "easeOutQuad" },
                { id: "eid31", tween: [ "style", "${_SummaryText}", "font-size", '119.9%', { fromValue: '68.6%'}], position: 750, duration: 263 },
                { id: "eid3", tween: [ "style", "${_SummaryBox}", "height", '186px', { fromValue: '101px'}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid35", tween: [ "style", "${_SummaryBox}", "border-bottom-right-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${_SummaryBox}", "width", '345px', { fromValue: '173px'}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${_SummaryBox}", "border-bottom-left-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid1107", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.offsetV", '-15px', { fromValue: '3px'}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid523", tween: [ "color", "${_SummaryText}", "color", 'rgba(7,7,7,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(135,7,7,1.00)'}], position: 0, duration: 1013 },
                { id: "eid33", tween: [ "style", "${_SummaryBox}", "border-top-left-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_SummaryBox}", "border-width", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_SummaryText}", "left", '2px', { fromValue: '5px'}], position: 0, duration: 1013 },
                { id: "eid1108", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.offsetH", '-15px', { fromValue: '3px'}], position: 13, duration: 1013, easing: "easeOutQuad" }            ]
        }
    }
},
"RBox": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    id: 'RnumberBox',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    rect: ['0px', '0px', '25px', '25px', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0.34)', 3, 3, 2],
                    fill: ['rgba(254,203,166,1.00)'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                    c: [
                    {
                        font: ['Arial, Helvetica, sans-serif', [68.75, '%'], 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                        type: 'text',
                        filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                        id: 'RnumberText',
                        text: 'R#',
                        align: 'justify',
                        rect: ['6px', '7px', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RnumberText}": [
                ["style", "top", '7px'],
                ["style", "left", '6px'],
                ["style", "font-size", '68.75%']
            ],
            "${_RnumberBox}": [
                ["style", "-webkit-transform-origin", [50,41], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["subproperty", "boxShadow.inset", ''],
                ["style", "left", '0px'],
                ["subproperty", "filter.drop-shadow.blur", '2px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["color", "background-color", 'rgba(254,203,166,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "filter.drop-shadow.offsetH", '3px'],
                ["style", "top", '0px'],
                ["subproperty", "filter.drop-shadow.offsetV", '3px'],
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.34)'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '25px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"RBox_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    id: 'RnumberBox',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    rect: ['0px', '0px', '25px', '25px', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    fill: ['rgba(254,203,166,1.00)'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                    c: [
                    {
                        rect: ['6px', '7px', 'auto', 'auto', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', [68.75, '%'], 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                        filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                        id: 'RnumberText',
                        text: 'R#',
                        align: 'justify',
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RnumberText}": [
                ["style", "top", '7px'],
                ["style", "left", '6px'],
                ["style", "font-size", '68.75%']
            ],
            "${_RnumberBox}": [
                ["style", "-webkit-transform-origin", [50,41], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["subproperty", "boxShadow.inset", ''],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(254,203,166,1.00)'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "cursor", 'pointer'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '25px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"BlueLion": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-1174px', '-1284px', '1920px', '2401px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.02', '0.02']],
                    id: 'BlueLion',
                    opacity: 0.50307160615921,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/BlueLion4.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_BlueLion}": [
                ["style", "top", '-1176px'],
                ["transform", "scaleY", '0.02'],
                ["subproperty", "filter.hue-rotate", '0deg'],
                ["style", "opacity", '0.15023999145299'],
                ["style", "left", '-941px'],
                ["transform", "scaleX", '0.02']
            ],
            "${symbolSelector}": [
                ["style", "height", '48px'],
                ["style", "width", '38px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid61", tween: [ "style", "${_BlueLion}", "opacity", '1', { fromValue: '0.15023999145299'}], position: 3, duration: 247 }            ]
        }
    }
},
"HAAG-Box-Template": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'SummaryBox',
                    type: 'rect',
                    rect: ['215px', '164px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'RBox',
                    type: 'rect',
                    userClass: 'first',
                    rect: ['5px', '52px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['38px', '9px', '177px', '11px', 'auto', 'auto'],
                    font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [68.6, '%'], 'rgba(103,7,7,1)', '400', 'none', 'normal'],
                    id: 'DateText',
                    text: 'YYYY-MM-DD FOAM',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            {
                id: 'SummaryBox',
                symbolName: 'SummaryBox_1',
                autoPlay: {

               }
            },
            {
                id: 'RBox',
                symbolName: 'RBox_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_RBox}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_SummaryBox}": [
                ["style", "top", '25px'],
                ["subproperty", "filter.drop-shadow.blur", '2px'],
                ["subproperty", "filter.drop-shadow.offsetV", '2px'],
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.68)'],
                ["style", "opacity", '0.89793684288987'],
                ["style", "left", '30px'],
                ["subproperty", "filter.drop-shadow.offsetH", '2px']
            ],
            "${_DateText}": [
                ["style", "top", '9px'],
                ["style", "text-align", 'left'],
                ["style", "left", '38px'],
                ["style", "height", '11px']
            ],
            "${symbolSelector}": [
                ["style", "height", '130px'],
                ["style", "width", '215px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid51", tween: [ "style", "${_RBox}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.blur", '8px', { fromValue: '2px'}], position: 0, duration: 250 },
                { id: "eid52", tween: [ "style", "${_RBox}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1974", tween: [ "style", "${_SummaryBox}", "opacity", '1', { fromValue: '0.89793684288987'}], position: 0, duration: 250 },
                { id: "eid53", tween: [ "style", "${_SummaryBox}", "top", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
                { id: "eid45", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.offsetH", '6px', { fromValue: '2px'}], position: 0, duration: 250 },
                { id: "eid46", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.offsetV", '6px', { fromValue: '2px'}], position: 0, duration: 250 },
                { id: "eid56", tween: [ "style", "${_SummaryBox}", "left", '30px', { fromValue: '30px'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.color", 'rgba(5,0,0,0.95)', { fromValue: 'rgba(0,0,0,0.68)'}], position: 0, duration: 250 }            ]
        }
    }
},
"SummaryBox_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    userClass: 'summary_box',
                    borderRadius: ['52.33px 41.39px', '52.33px 41.39px', '52.33px 41.39px', '52.33px 41.39px'],
                    rect: ['0px', '0px', '339px', '182px', 'auto', 'auto'],
                    id: 'SummaryBox',
                    stroke: [5, 'rgba(255,31,23,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,201,201,1.00)'],
                    c: [
                    {
                        type: 'text',
                        rect: ['38px', '39px', '263px', '105px', 'auto', 'auto'],
                        align: 'right',
                        id: 'SummaryText',
                        text: '&lt;a href=\"_secondary.html\" class=\"first\"&gt;Slide to the right, and load content from a secondary page.&lt;/a&gt;',
                        userClass: 'rbutton',
                        font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [100, '%'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    }]
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'BlueLion2',
                    rect: ['301', '136', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'BlueLion2',
                symbolName: 'BlueLion',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_BlueLion2}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '105px'],
                ["style", "width", '177px']
            ],
            "${_SummaryText}": [
                ["style", "letter-spacing", '0em'],
                ["transform", "scaleX", '0.89'],
                ["color", "color", 'rgba(135,7,7,1.00)'],
                ["style", "left", '5px'],
                ["style", "font-size", '68.6%'],
                ["style", "top", '11px'],
                ["style", "text-align", 'right'],
                ["transform", "scaleY", '0.84'],
                ["style", "font-style", 'normal'],
                ["style", "height", '81px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "word-spacing", '0em'],
                ["style", "width", '170px']
            ],
            "${_SummaryBox}": [
                ["color", "background-color", 'rgba(255,201,201,1.00)'],
                ["style", "border-top-left-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '173px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '101px'],
                ["color", "border-color", 'rgba(255,31,23,1.00)'],
                ["style", "left", '0px'],
                ["style", "border-width", '2px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1026,
            autoPlay: false,
            timeline: [
                { id: "eid27", tween: [ "style", "${_SummaryText}", "height", '165px', { fromValue: '81px'}], position: 0, duration: 1013 },
                { id: "eid28", tween: [ "style", "${_SummaryText}", "width", '334px', { fromValue: '170px'}], position: 0, duration: 1013 },
                { id: "eid64", tween: [ "style", "${_BlueLion2}", "opacity", '1', { fromValue: '0'}], position: 958, duration: 68 },
                { id: "eid523", tween: [ "color", "${_SummaryText}", "color", 'rgba(7,7,7,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(135,7,7,1.00)'}], position: 0, duration: 1013 },
                { id: "eid29", tween: [ "style", "${_SummaryText}", "left", '2px', { fromValue: '5px'}], position: 0, duration: 1013 },
                { id: "eid31", tween: [ "style", "${_SummaryText}", "font-size", '119.9%', { fromValue: '68.6%'}], position: 750, duration: 263 },
                { id: "eid57", tween: [ "style", "${_BlueLion2}", "display", 'block', { fromValue: 'none'}], position: 958, duration: 0 },
                { id: "eid58", tween: [ "style", "${_BlueLion2}", "display", 'block', { fromValue: 'block'}], position: 1026, duration: 0 },
                { id: "eid4", tween: [ "style", "${_SummaryBox}", "width", '345px', { fromValue: '173px'}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid33", tween: [ "style", "${_SummaryBox}", "border-top-left-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_SummaryBox}", "border-width", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_SummaryBox}", "border-bottom-left-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${_SummaryBox}", "border-top-right-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid35", tween: [ "style", "${_SummaryBox}", "border-bottom-right-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "style", "${_SummaryText}", "top", '5px', { fromValue: '11px'}], position: 0, duration: 1013 },
                { id: "eid3", tween: [ "style", "${_SummaryBox}", "height", '186px', { fromValue: '101px'}], position: 13, duration: 1013, easing: "easeOutQuad" }            ]
        }
    }
},
"HAAG-Box-Template_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'RBox',
                    type: 'rect',
                    rect: ['5px', '52px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['38px', '9px', '177px', '11px', 'auto', 'auto'],
                    id: 'DateText',
                    text: 'YYYY-MM-DD FOAM',
                    align: 'left',
                    font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [68.6, '%'], 'rgba(13,29,131,1.00)', '400', 'none', 'normal']
                },
                {
                    id: 'SummaryBox_1_1',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['30', '25', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'RBox',
                symbolName: 'RBox_1',
                autoPlay: {

               }
            },
            {
                id: 'SummaryBox_1_1',
                symbolName: 'SummaryBoxBlue',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_RBox}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '130px'],
                ["style", "width", '215px']
            ],
            "${_DateText}": [
                ["style", "top", '9px'],
                ["style", "text-align", 'left'],
                ["style", "height", '11px'],
                ["style", "left", '38px'],
                ["color", "color", 'rgba(13,29,131,1.00)']
            ],
            "${_SummaryBox_1_1}": [
                ["subproperty", "filter.drop-shadow.color", 'rgba(1,6,9,1.00)'],
                ["subproperty", "filter.drop-shadow.blur", '2px'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '25px'],
                ["style", "opacity", '0.89793669871795'],
                ["subproperty", "filter.drop-shadow.offsetV", '2px'],
                ["subproperty", "filter.drop-shadow.offsetH", '2px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid1977", tween: [ "style", "${_SummaryBox_1_1}", "opacity", '1', { fromValue: '0.89793669871795'}], position: 0, duration: 250 },
                { id: "eid1736", tween: [ "subproperty", "${_SummaryBox_1_1}", "filter.drop-shadow.offsetH", '6px', { fromValue: '2px'}], position: 0, duration: 250 },
                { id: "eid52", tween: [ "style", "${_RBox}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "style", "${_RBox}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1733", tween: [ "subproperty", "${_SummaryBox_1_1}", "filter.drop-shadow.blur", '8px', { fromValue: '2px'}], position: 0, duration: 250 },
                { id: "eid1994", tween: [ "subproperty", "${_SummaryBox_1_1}", "filter.drop-shadow.color", 'rgba(0,0,0,1.00)', { fromValue: 'rgba(1,6,9,1.00)'}], position: 0, duration: 250 },
                { id: "eid1732", tween: [ "style", "${_SummaryBox_1_1}", "top", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
                { id: "eid1735", tween: [ "subproperty", "${_SummaryBox_1_1}", "filter.drop-shadow.offsetV", '6px', { fromValue: '2px'}], position: 0, duration: 250 }            ]
        }
    }
},
"SummaryBoxBlue": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    userClass: 'summary_box',
                    borderRadius: ['52.33px 41.39px', '52.33px 41.39px', '52.33px 41.39px', '52.33px 41.39px'],
                    rect: ['0px', '0px', '339px', '182px', 'auto', 'auto'],
                    id: 'SummaryBox',
                    stroke: [5, 'rgba(255,31,23,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,201,201,1.00)'],
                    c: [
                    {
                        userClass: 'ui-widget-content',
                        font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [100, '%'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        align: 'right',
                        id: 'SummaryText',
                        text: 'SummaryText',
                        type: 'text',
                        rect: ['38px', '39px', '263px', '105px', 'auto', 'auto']
                    }]
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'BlueLion2',
                    rect: ['301', '136', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'BlueLion2',
                symbolName: 'BlueLion_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_BlueLion2}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_SummaryBox}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '173px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '101px'],
                ["color", "border-color", 'rgba(0,12,102,1.00)'],
                ["style", "border-width", '3px'],
                ["style", "left", '0px']
            ],
            "${_SummaryText}": [
                ["style", "letter-spacing", '0em'],
                ["transform", "scaleX", '0.89'],
                ["style", "width", '170px'],
                ["style", "left", '5px'],
                ["style", "font-size", '68.6%'],
                ["style", "top", '11px'],
                ["style", "text-align", 'right'],
                ["transform", "scaleY", '0.84'],
                ["style", "height", '81px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "word-spacing", '0em'],
                ["color", "color", 'rgba(22,121,242,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '105px'],
                ["style", "width", '177px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1026,
            autoPlay: false,
            timeline: [
                { id: "eid28", tween: [ "style", "${_SummaryText}", "width", '334px', { fromValue: '170px'}], position: 0, duration: 1013 },
                { id: "eid3", tween: [ "style", "${_SummaryBox}", "height", '186px', { fromValue: '101px'}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid1799", tween: [ "color", "${_SummaryText}", "color", 'rgba(5,216,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(22,121,242,1.00)'}], position: 0, duration: 1013 },
                { id: "eid65", tween: [ "color", "${_SummaryBox}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_SummaryBox}", "border-top-right-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "style", "${_SummaryText}", "top", '5px', { fromValue: '11px'}], position: 0, duration: 1013 },
                { id: "eid68", tween: [ "style", "${_SummaryBox}", "border-width", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_SummaryBox}", "border-bottom-right-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid57", tween: [ "style", "${_BlueLion2}", "display", 'block', { fromValue: 'none'}], position: 958, duration: 0 },
                { id: "eid58", tween: [ "style", "${_BlueLion2}", "display", 'block', { fromValue: 'block'}], position: 1026, duration: 0 },
                { id: "eid4", tween: [ "style", "${_SummaryBox}", "width", '345px', { fromValue: '173px'}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid64", tween: [ "style", "${_BlueLion2}", "opacity", '1', { fromValue: '0'}], position: 958, duration: 68 },
                { id: "eid32", tween: [ "style", "${_SummaryBox}", "border-bottom-left-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid1765", tween: [ "color", "${_SummaryBox}", "border-color", 'rgba(0,12,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,12,102,1.00)'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_SummaryBox}", "border-top-left-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid27", tween: [ "style", "${_SummaryText}", "height", '165px', { fromValue: '81px'}], position: 0, duration: 1013 },
                { id: "eid29", tween: [ "style", "${_SummaryText}", "left", '2px', { fromValue: '5px'}], position: 0, duration: 1013 },
                { id: "eid31", tween: [ "style", "${_SummaryText}", "font-size", '119.9%', { fromValue: '68.6%'}], position: 750, duration: 263 }            ]
        }
    }
},
"BlueLion_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-1174px', '-1284px', '1920px', '2401px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.02', '0.02']],
                    id: 'BlueLion',
                    opacity: 0.50307160615921,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/BlueLion5.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_BlueLion}": [
                ["style", "top", '-1176px'],
                ["transform", "scaleY", '0.02'],
                ["subproperty", "filter.hue-rotate", '0deg'],
                ["style", "opacity", '0.15023999145299'],
                ["style", "left", '-941px'],
                ["transform", "scaleX", '0.02']
            ],
            "${symbolSelector}": [
                ["style", "height", '48px'],
                ["style", "width", '38px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid61", tween: [ "style", "${_BlueLion}", "opacity", '1', { fromValue: '0.15023999145299'}], position: 3, duration: 247 }            ]
        }
    }
},
"HAAG-Box-Template_2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'RBox',
                    type: 'rect',
                    rect: ['5px', '52px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [68.6, '%'], 'rgba(103,7,7,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'DateText',
                    text: 'YYYY-MM-DD FOAM',
                    align: 'left',
                    rect: ['38px', '9px', '177px', '11px', 'auto', 'auto']
                },
                {
                    id: 'SummaryBox_1_1',
                    type: 'rect',
                    rect: ['30', '25', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'RBox',
                symbolName: 'RBox_1',
                autoPlay: {

               }
            },
            {
                id: 'SummaryBox_1_1',
                symbolName: 'SummaryBoxBlue',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_RBox}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_SummaryBox_1_1}": [
                ["style", "top", '25px'],
                ["subproperty", "filter.drop-shadow.blur", '2px'],
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.498039)'],
                ["subproperty", "filter.drop-shadow.offsetV", '2px'],
                ["subproperty", "filter.drop-shadow.offsetH", '2px']
            ],
            "${_DateText}": [
                ["style", "height", '11px'],
                ["style", "left", '38px'],
                ["style", "text-align", 'left'],
                ["style", "top", '9px']
            ],
            "${symbolSelector}": [
                ["style", "height", '130px'],
                ["style", "width", '215px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid1736", tween: [ "subproperty", "${_SummaryBox_1_1}", "filter.drop-shadow.offsetH", '10px', { fromValue: '2px'}], position: 0, duration: 250 },
                { id: "eid52", tween: [ "style", "${_RBox}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "style", "${_RBox}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1733", tween: [ "subproperty", "${_SummaryBox_1_1}", "filter.drop-shadow.blur", '8px', { fromValue: '2px'}], position: 0, duration: 250 },
                { id: "eid1734", tween: [ "subproperty", "${_SummaryBox_1_1}", "filter.drop-shadow.color", 'rgba(0,0,0,0.25)', { fromValue: 'rgba(0,0,0,0.498039)'}], position: 0, duration: 250 },
                { id: "eid1732", tween: [ "style", "${_SummaryBox_1_1}", "top", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
                { id: "eid1735", tween: [ "subproperty", "${_SummaryBox_1_1}", "filter.drop-shadow.offsetV", '10px', { fromValue: '2px'}], position: 0, duration: 250 }            ]
        }
    }
},
"SummaryBox_1_2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    userClass: 'summary_box',
                    borderRadius: ['52.33px 41.39px', '52.33px 41.39px', '52.33px 41.39px', '52.33px 41.39px'],
                    rect: ['0px', '0px', '339px', '182px', 'auto', 'auto'],
                    id: 'SummaryBox',
                    stroke: [5, 'rgba(255,31,23,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,201,201,1.00)'],
                    c: [
                    {
                        rect: ['38px', '39px', '263px', '105px', 'auto', 'auto'],
                        userClass: 'ui-widget-content',
                        align: 'right',
                        id: 'SummaryText',
                        text: 'SummaryText',
                        font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [100, '%'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                        type: 'text'
                    }]
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'BlueLion2',
                    rect: ['301', '136', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'BlueLion2',
                symbolName: 'BlueLion_1_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_BlueLion2}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '105px'],
                ["style", "width", '177px']
            ],
            "${_SummaryText}": [
                ["style", "letter-spacing", '0em'],
                ["transform", "scaleX", '0.89'],
                ["style", "font-size", '68.6%'],
                ["style", "left", '5px'],
                ["style", "width", '170px'],
                ["style", "top", '11px'],
                ["style", "text-align", 'right'],
                ["transform", "scaleY", '0.84'],
                ["style", "height", '81px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "word-spacing", '0em'],
                ["color", "color", 'rgba(2,48,13,1.00)']
            ],
            "${_SummaryBox}": [
                ["color", "background-color", 'rgba(9,112,0,0.5412)'],
                ["style", "border-top-left-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '173px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [21.42,12.02], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '101px'],
                ["color", "border-color", 'rgba(8,50,5,1.00)'],
                ["style", "border-width", '5px'],
                ["style", "left", '-1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1026,
            autoPlay: false,
            timeline: [
                { id: "eid28", tween: [ "style", "${_SummaryText}", "width", '334px', { fromValue: '170px'}], position: 0, duration: 1013 },
                { id: "eid3", tween: [ "style", "${_SummaryBox}", "height", '186px', { fromValue: '101px'}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid1763", tween: [ "style", "${_SummaryBox}", "left", '-1px', { fromValue: '-1px'}], position: 0, duration: 0 },
                { id: "eid1978", tween: [ "color", "${_SummaryBox}", "background-color", 'rgba(46,227,13,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(9,112,0,0.5412)'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_SummaryBox}", "border-top-right-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid31", tween: [ "style", "${_SummaryText}", "font-size", '119.9%', { fromValue: '68.6%'}], position: 750, duration: 263 },
                { id: "eid35", tween: [ "style", "${_SummaryBox}", "border-bottom-right-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid27", tween: [ "style", "${_SummaryText}", "height", '165px', { fromValue: '81px'}], position: 0, duration: 1013 },
                { id: "eid2064", tween: [ "color", "${_SummaryBox}", "border-color", 'rgba(8,50,5,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(8,50,5,1.00)'}], position: 0, duration: 0 },
                { id: "eid57", tween: [ "style", "${_BlueLion2}", "display", 'block', { fromValue: 'none'}], position: 958, duration: 0 },
                { id: "eid58", tween: [ "style", "${_BlueLion2}", "display", 'block', { fromValue: 'block'}], position: 1026, duration: 0 },
                { id: "eid4", tween: [ "style", "${_SummaryBox}", "width", '345px', { fromValue: '173px'}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid523", tween: [ "color", "${_SummaryText}", "color", 'rgba(55,255,2,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(2,48,13,1.00)'}], position: 0, duration: 1013 },
                { id: "eid2063", tween: [ "style", "${_SummaryBox}", "border-width", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid64", tween: [ "style", "${_BlueLion2}", "opacity", '1', { fromValue: '0'}], position: 958, duration: 68 },
                { id: "eid33", tween: [ "style", "${_SummaryBox}", "border-top-left-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${_SummaryBox}", "border-bottom-left-radius", [25,25], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.42,12.02]}], position: 13, duration: 1013, easing: "easeOutQuad" },
                { id: "eid29", tween: [ "style", "${_SummaryText}", "left", '2px', { fromValue: '5px'}], position: 0, duration: 1013 },
                { id: "eid30", tween: [ "style", "${_SummaryText}", "top", '5px', { fromValue: '11px'}], position: 0, duration: 1013 }            ]
        }
    }
},
"RBox_1_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    id: 'RnumberBox',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    rect: ['0px', '0px', '25px', '25px', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                    fill: ['rgba(254,203,166,1.00)'],
                    c: [
                    {
                        type: 'text',
                        rect: ['6px', '7px', 'auto', 'auto', 'auto', 'auto'],
                        filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                        id: 'RnumberText',
                        text: 'R#',
                        align: 'justify',
                        font: ['Arial, Helvetica, sans-serif', [68.75, '%'], 'rgba(0,0,0,1)', '400', 'none', 'normal']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RnumberText}": [
                ["style", "top", '7px'],
                ["style", "left", '6px'],
                ["style", "font-size", '68.75%']
            ],
            "${_RnumberBox}": [
                ["color", "background-color", 'rgba(254,203,166,1.00)'],
                ["subproperty", "boxShadow.inset", ''],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "cursor", 'pointer'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["style", "-webkit-transform-origin", [50,41], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,41],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '25px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"BlueLion_1_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.02', '0.02']],
                    rect: ['-1174px', '-1284px', '1920px', '2401px', 'auto', 'auto'],
                    id: 'BlueLion',
                    opacity: 0.50307160615921,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/BlueLion52.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_BlueLion}": [
                ["style", "top", '-1176px'],
                ["transform", "scaleY", '0.02'],
                ["subproperty", "filter.hue-rotate", '0deg'],
                ["style", "opacity", '0.15023999145299'],
                ["style", "left", '-941px'],
                ["transform", "scaleX", '0.02']
            ],
            "${symbolSelector}": [
                ["style", "height", '48px'],
                ["style", "width", '38px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid61", tween: [ "style", "${_BlueLion}", "opacity", '1', { fromValue: '0.15023999145299'}], position: 3, duration: 247 }            ]
        }
    }
},
"HAAG-Box-Template_2_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'RBox',
                    type: 'rect',
                    rect: ['5px', '52px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['38px', '9px', '177px', '11px', 'auto', 'auto'],
                    id: 'DateText',
                    text: 'YYYY-MM-DD FOAM',
                    align: 'left',
                    font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [68.6, '%'], 'rgba(103,7,7,1)', '400', 'none', 'normal']
                },
                {
                    id: 'SummaryBox_1_2',
                    type: 'rect',
                    rect: ['25', '30', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'RBox',
                symbolName: 'RBox_1_1',
                autoPlay: {

               }
            },
            {
                id: 'SummaryBox_1_2',
                symbolName: 'SummaryBox_1_2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_RBox}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_SummaryBox_1_2}": [
                ["style", "top", '25px'],
                ["subproperty", "filter.drop-shadow.blur", '2px'],
                ["subproperty", "filter.drop-shadow.color", 'rgba(28,91,22,0.458824)'],
                ["style", "opacity", '0.89827056623932'],
                ["subproperty", "filter.drop-shadow.offsetV", '2px'],
                ["subproperty", "filter.drop-shadow.offsetH", '2px']
            ],
            "${_DateText}": [
                ["style", "height", '11px'],
                ["style", "top", '9px'],
                ["style", "left", '38px'],
                ["style", "text-align", 'left']
            ],
            "${symbolSelector}": [
                ["style", "height", '130px'],
                ["style", "width", '215px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 251,
            autoPlay: false,
            timeline: [
                { id: "eid1768", tween: [ "style", "${_SummaryBox_1_2}", "top", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
                { id: "eid1778", tween: [ "subproperty", "${_SummaryBox_1_2}", "filter.drop-shadow.offsetH", '6px', { fromValue: '2px'}], position: 0, duration: 250 },
                { id: "eid1980", tween: [ "style", "${_SummaryBox_1_2}", "opacity", '1', { fromValue: '0.89827056623932'}], position: 0, duration: 251 },
                { id: "eid51", tween: [ "style", "${_RBox}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2008", tween: [ "subproperty", "${_SummaryBox_1_2}", "filter.drop-shadow.color", 'rgba(0,0,0,0.52)', { fromValue: 'rgba(28,91,22,0.458824)'}], position: 0, duration: 251 },
                { id: "eid1777", tween: [ "subproperty", "${_SummaryBox_1_2}", "filter.drop-shadow.blur", '8px', { fromValue: '2px'}], position: 0, duration: 250 },
                { id: "eid52", tween: [ "style", "${_RBox}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1779", tween: [ "subproperty", "${_SummaryBox_1_2}", "filter.drop-shadow.offsetV", '6px', { fromValue: '2px'}], position: 0, duration: 250 }            ]
        }
    }
},
"GreyBox": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['6px', '-6px', '339px', '182px', 'auto', 'auto'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                    id: 'SummaryBox',
                    stroke: [5, 'rgba(255,31,23,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,201,201,1.00)'],
                    c: [
                    {
                        transform: [[0, 0], ['-90']],
                        rect: ['-19px', '51px', '106px', 'auto', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', [70.5, '%'], 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                        filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                        id: 'DateText',
                        text: 'YYYY-MM-DD FOAM',
                        align: 'left',
                        type: 'text'
                    },
                    {
                        type: 'text',
                        rect: ['38px', '39px', '263px', '105px', 'auto', 'auto'],
                        align: 'right',
                        id: 'SummaryText',
                        text: 'I\'m open and in front.',
                        textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                        font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                    },
                    {
                        display: 'none',
                        type: 'rect',
                        rect: ['331px', '162px', 'auto', 'auto', 'auto', 'auto'],
                        id: 'BlueLion_1_12'
                    }]
                }
            ],
            symbolInstances: [
            {
                id: 'BlueLion_1_12',
                symbolName: 'BlueLion_1_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '129px'],
                ["style", "width", '68px']
            ],
            "${_DateText}": [
                ["style", "top", '58px'],
                ["style", "width", '106px'],
                ["transform", "scaleY", '1.12'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '1.12'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-21px'],
                ["style", "font-size", '70.5%']
            ],
            "${_SummaryBox}": [
                ["style", "left", '0px'],
                ["subproperty", "filter.drop-shadow.blur", '3px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["color", "background-color", 'rgba(216,214,203,0.99)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '41px'],
                ["style", "top", '0px'],
                ["color", "border-color", 'rgba(199,199,199,1.00)'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.36)'],
                ["style", "height", '127px'],
                ["subproperty", "filter.drop-shadow.offsetV", '3px'],
                ["subproperty", "filter.drop-shadow.offsetH", '-3px'],
                ["style", "border-width", '3px']
            ],
            "${_BlueLion_1_12}": [
                ["style", "top", '69px'],
                ["style", "opacity", '1'],
                ["style", "left", '3px'],
                ["style", "display", 'none']
            ],
            "${_SummaryText}": [
                ["color", "color", 'rgba(37,37,30,1.00)'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "left", '-85px'],
                ["transform", "scaleY", '0.52853'],
                ["style", "font-style", 'normal'],
                ["style", "word-spacing", '0em'],
                ["subproperty", "textShadow.blur", '3px'],
                ["style", "letter-spacing", '0em'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '0.56'],
                ["style", "font-size", '21.76px'],
                ["style", "top", '36px'],
                ["style", "text-align", 'right'],
                ["style", "width", '216px'],
                ["style", "height", '56px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1013,
            autoPlay: false,
            timeline: [
                { id: "eid3", tween: [ "style", "${_SummaryBox}", "height", '186px', { fromValue: '127px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid615", tween: [ "style", "${_DateText}", "top", '-29px', { fromValue: '58px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid614", tween: [ "style", "${_DateText}", "left", '50px', { fromValue: '-21px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid602", tween: [ "style", "${_DateText}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2266", tween: [ "style", "${_DateText}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2267", tween: [ "style", "${_DateText}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2268", tween: [ "style", "${_DateText}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2269", tween: [ "style", "${_DateText}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid510", tween: [ "subproperty", "${_SummaryText}", "textShadow.offsetH", '3px', { fromValue: '3px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid486", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.color", 'rgba(0,0,0,0.20)', { fromValue: 'rgba(0,0,0,0.36)'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid511", tween: [ "subproperty", "${_SummaryText}", "textShadow.offsetV", '3px', { fromValue: '3px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid575", tween: [ "style", "${_SummaryText}", "font-size", '11.04px', { fromValue: '21.76px'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid31", tween: [ "style", "${_SummaryText}", "font-size", '50px', { fromValue: '11.04px'}], position: 750, duration: 263 },
                { id: "eid1794", tween: [ "style", "${_BlueLion_1_12}", "opacity", '1', { fromValue: '1'}], position: 750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1793", tween: [ "style", "${_BlueLion_1_12}", "opacity", '1', { fromValue: '1'}], position: 1000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1064", tween: [ "style", "${_SummaryBox}", "border-bottom-right-radius", [10,10], { valueTemplate: '@@0@@px @@1@@px', fromValue: [10,10]}], position: 0, duration: 0 },
                { id: "eid1041", tween: [ "style", "${_SummaryBox}", "border-width", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid573", tween: [ "transform", "${_SummaryText}", "scaleX", '0.56', { fromValue: '0.56'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid29", tween: [ "style", "${_SummaryText}", "left", '2px', { fromValue: '-85px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid574", tween: [ "transform", "${_SummaryText}", "scaleY", '0.52853', { fromValue: '0.52853'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1070", tween: [ "color", "${_SummaryBox}", "border-color", 'rgba(199,199,199,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(199,199,199,1.00)'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_SummaryText}", "height", '165px', { fromValue: '56px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid1069", tween: [ "color", "${_SummaryBox}", "background-color", 'rgba(216,214,203,0.99)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(216,214,203,0.99)'}], position: 0, duration: 0 },
                { id: "eid1061", tween: [ "style", "${_SummaryBox}", "border-top-right-radius", [5,5], { valueTemplate: '@@0@@px @@1@@px', fromValue: [5,5]}], position: 0, duration: 0 },
                { id: "eid1886", tween: [ "style", "${_BlueLion_1_12}", "left", '3px', { fromValue: '3px'}], position: 1013, duration: 0 },
                { id: "eid1887", tween: [ "style", "${_BlueLion_1_12}", "top", '69px', { fromValue: '69px'}], position: 1013, duration: 0 },
                { id: "eid616", tween: [ "transform", "${_DateText}", "scaleX", '1.32', { fromValue: '1.12'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid30", tween: [ "style", "${_SummaryText}", "top", '5px', { fromValue: '36px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid1055", tween: [ "style", "${_SummaryBox}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid603", tween: [ "transform", "${_DateText}", "rotateZ", '0deg', { fromValue: '-90deg'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid617", tween: [ "transform", "${_DateText}", "scaleY", '1.32', { fromValue: '1.12'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid449", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.blur", '8px', { fromValue: '3px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid585", tween: [ "style", "${_SummaryBox}", "left", '9px', { fromValue: '0px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid1062", tween: [ "style", "${_SummaryBox}", "border-top-left-radius", [5,5], { valueTemplate: '@@0@@px @@1@@px', fromValue: [5,5]}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_SummaryText}", "width", '334px', { fromValue: '216px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid4", tween: [ "style", "${_SummaryBox}", "width", '345px', { fromValue: '41px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid514", tween: [ "subproperty", "${_SummaryText}", "textShadow.color", 'rgba(0,0,0,0.28)', { fromValue: 'rgba(0,0,0,0)'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid494", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.offsetV", '-20px', { fromValue: '3px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid447", tween: [ "subproperty", "${_SummaryBox}", "filter.drop-shadow.offsetH", '-22px', { fromValue: '-3px'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid523", tween: [ "color", "${_SummaryText}", "color", 'rgba(30,78,161,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(37,37,30,1.00)'}], position: 0, duration: 1013, easing: "easeInOutQuad" },
                { id: "eid1063", tween: [ "style", "${_SummaryBox}", "border-bottom-left-radius", [10,10], { valueTemplate: '@@0@@px @@1@@px', fromValue: [10,10]}], position: 0, duration: 0 },
                { id: "eid1792", tween: [ "style", "${_BlueLion_1_12}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid584", tween: [ "transform", "${_SummaryText}", "rotateZ", '0deg', { fromValue: '-90deg'}], position: 0, duration: 1013, easing: "easeInOutQuad" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-52552074");
