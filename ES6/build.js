"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var element = React.createElement(App);
// ReactDOM.render(element, document.getElementById('app'));

var dom = function dom() {
    var z = 1;
};

var Stopwatch = function () {
    function Stopwatch(display, results) {
        _classCallCheck(this, Stopwatch);

        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
        this.results = results;
    }

    _createClass(Stopwatch, [{
        key: "start",
        value: function start() {
            var _this = this;

            if (!this.running) {
                this.running = true;
                this.watch = setInterval(function () {
                    return _this.step();
                }, 10);
            }
        }
    }, {
        key: "step",
        value: function step() {
            if (!this.running) return;
            this.calculate();
            this.print();
        }
    }, {
        key: "calculate",
        value: function calculate() {
            this.times.miliseconds += 1;
            if (this.times.miliseconds >= 100) {
                this.times.seconds += 1;
                this.times.miliseconds = 1;
            }
            if (this.times.seconds >= 60) {
                this.times.minutes += 1;
                this.times.seconds = 0;
            }
        }
    }, {
        key: "stop",
        value: function stop() {
            this.running = false;
            clearInterval(this.watch);
        }
    }, {
        key: "reset",
        value: function reset() {
            this.times = {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            };
        }
    }, {
        key: "addTime",
        value: function addTime() {
            var li = document.createElement('li');
            li.setAttribute("class", "singleTime");
            li.appendChild(document.createTextNode(this.format(this.times)));
            this.results.appendChild(li);
        }
    }, {
        key: "resetTimes",
        value: function resetTimes() {
            this.results.innerHTML = '';
        }
    }, {
        key: "print",
        value: function print() {
            this.display.innerText = this.format(this.times);
        }
    }, {
        key: "format",
        value: function format(times) {
            return pad0(times.minutes) + ":" + pad0(times.seconds) + ":" + pad0(Math.floor(times.miliseconds));
        }
    }]);

    return Stopwatch;
}();

function pad0(value) {
    var result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

var stopwatch = new Stopwatch(document.querySelector('.stopwatch'), document.querySelector('.results'));
var startButton = document.getElementById('start');
startButton.addEventListener('click', stopwatch.start.bind(stopwatch));
var stopButton = document.getElementById('stop');
stopButton.addEventListener('click', stopwatch.stop.bind(stopwatch));
var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', stopwatch.reset.bind(stopwatch));
var addTimeButton = document.getElementById('addTime');
addTimeButton.addEventListener('click', stopwatch.addTime.bind(stopwatch));
var resetTimesButton = document.getElementById('resetTimes');
resetTimesButton.addEventListener('click', stopwatch.resetTimes.bind(stopwatch));

// function foo(callback){
//     var a = 1;
//     callback(a);
// }

// foo(function(a){
//     //do it after previously function was executed
//     console.log(a);
// });
