"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            running: false,
            results: []
        };
        return _this;
    }

    _createClass(App, [{
        key: "setResultList",
        value: function setResultList(results) {
            this.setState({ results: results });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(NavButtons, {
                    onStartClick: function onStartClick() {
                        return _this2.refs.stopwatch.startStopwatch();
                    },
                    onStopClick: function onStopClick() {
                        return _this2.refs.stopwatch.stopStopwatch();
                    },
                    onResetClick: function onResetClick() {
                        return _this2.refs.stopwatch.resetStopwatch();
                    },
                    onAddClick: function onAddClick() {
                        return _this2.refs.stopwatch.addToList();
                    },
                    onResetListClick: function onResetListClick() {
                        return _this2.refs.stopwatch.resetList();
                    }
                }),
                React.createElement(Stopwatch, { runningState: this.state.running, ref: "stopwatch", onResultListChange: function onResultListChange(results) {
                        return _this2.setResultList(results);
                    } }),
                React.createElement(ResultList, { resultList: this.state.results })
            );
        }
    }]);

    return App;
}(React.Component);

var NavButtons = function (_React$Component2) {
    _inherits(NavButtons, _React$Component2);

    function NavButtons(props) {
        _classCallCheck(this, NavButtons);

        return _possibleConstructorReturn(this, (NavButtons.__proto__ || Object.getPrototypeOf(NavButtons)).call(this, props));
    }

    _createClass(NavButtons, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "controls" },
                React.createElement(
                    "button",
                    { className: "button", onClick: this.props.onStartClick },
                    "Start"
                ),
                React.createElement(
                    "button",
                    { className: "button", onClick: this.props.onStopClick },
                    "Stop"
                ),
                React.createElement(
                    "button",
                    { className: "button", onClick: this.props.onResetClick },
                    "Reset"
                ),
                React.createElement(
                    "button",
                    { className: "button", onClick: this.props.onAddClick },
                    "Add to list"
                ),
                React.createElement(
                    "button",
                    { className: "button", onClick: this.props.onResetListClick },
                    "Reset list"
                )
            );
        }
    }]);

    return NavButtons;
}(React.Component);

var ResultList = function ResultList(props) {
    var resultItems = props.resultList.map(function (result, index) {
        return React.createElement(ResultListItem, {
            key: index,
            result: result
        });
    });
    return React.createElement(
        "ol",
        { className: "results" },
        resultItems
    );
};

var ResultListItem = function ResultListItem(_ref) {
    var result = _ref.result;

    return React.createElement(
        "li",
        { className: "singleTime" },
        result
    );
};

var Stopwatch = function (_React$Component3) {
    _inherits(Stopwatch, _React$Component3);

    function Stopwatch(props) {
        _classCallCheck(this, Stopwatch);

        var _this4 = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this, props));

        _this4.state = {
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            },
            running: false,
            watch: {},
            results: []
        };
        return _this4;
    }

    _createClass(Stopwatch, [{
        key: "startStopwatch",
        value: function startStopwatch() {
            var _this5 = this;

            if (!this.state.running) {
                this.setState({
                    watch: setInterval(function () {
                        return _this5.step();
                    }, 10),
                    running: true
                });
            }
        }
    }, {
        key: "step",
        value: function step() {
            if (!this.state.running) return;
            this.calculate();
        }
    }, {
        key: "calculate",
        value: function calculate() {
            this.state.times.miliseconds += 1;
            if (this.state.times.miliseconds >= 100) {
                this.state.times.seconds += 1;
                this.state.times.miliseconds = 1;
            }
            if (this.state.times.seconds >= 60) {
                this.state.times.minutes += 1;
                this.state.times.seconds = 0;
            }
            this.forceUpdate();
        }
    }, {
        key: "stopStopwatch",
        value: function stopStopwatch() {
            this.setState({
                running: false
            });
            clearInterval(this.state.watch);
        }
    }, {
        key: "addToList",
        value: function addToList() {
            this.setState({ results: this.state.results.concat(this.format(this.state.times)) });
            this.props.onResultListChange(this.state.results);
        }
    }, {
        key: "resetList",
        value: function resetList() {
            this.setState({
                results: []
            });
            this.props.onResultListChange(this.state.results);
        }
    }, {
        key: "resetStopwatch",
        value: function resetStopwatch() {
            this.setState({
                times: {
                    minutes: 0,
                    seconds: 0,
                    miliseconds: 0
                }
            });
        }
    }, {
        key: "format",
        value: function format(times) {
            return this.pad0(times.minutes) + ":" + this.pad0(times.seconds) + ":" + this.pad0(Math.floor(times.miliseconds));
        }
    }, {
        key: "pad0",
        value: function pad0(value) {
            var result = value.toString();
            if (result.length < 2) {
                result = '0' + result;
            }
            return result;
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "span",
                    null,
                    this.format(this.state.times)
                )
            );
        }
    }]);

    return Stopwatch;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
