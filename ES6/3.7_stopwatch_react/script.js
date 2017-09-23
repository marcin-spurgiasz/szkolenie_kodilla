class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            running: false,
            results: [],
        };
    }

    setResultList(results) {
        this.setState({ results });
    }

    render() {
        return (
            <div className="container">
                <NavButtons 
                onStartClick = {() => this.refs.stopwatch.startStopwatch()}
                onStopClick = {() => this.refs.stopwatch.stopStopwatch()}
                onResetClick = {() => this.refs.stopwatch.resetStopwatch()}
                onAddClick = {() => this.refs.stopwatch.addToList()}
                onResetListClick = {() => this.refs.stopwatch.resetList()}
                />
                <Stopwatch runningState={this.state.running} ref='stopwatch' onResultListChange={results => this.setResultList(results)}/>
                <ResultList resultList={this.state.results}/>
            </div>
        );
    }
}

class NavButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="controls">
                <button className="button" onClick={this.props.onStartClick}>Start</button>
                <button className="button" onClick={this.props.onStopClick}>Stop</button>
                <button className="button" onClick={this.props.onResetClick}>Reset</button>
                <button className="button" onClick={this.props.onAddClick}>Add to list</button>
                <button className="button" onClick={this.props.onResetListClick}>Reset list</button>
            </div>
        );
    }
}

const ResultList = (props) => {
    const resultItems = props.resultList.map(((result, index) => {
        return (
            <ResultListItem 
            key={index}
            result={result}
            />
        );
    }));
    return (
        <ol className="results">
            {resultItems}
        </ol>
    );
}

const ResultListItem = ({result}) => {
    return (
        <li className="singleTime">
            {result}
        </li>
    );
}

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            },
            running: false,
            watch: {},
            results: []
        };
    }

    startStopwatch() {
        if (!this.state.running) {
            this.setState({
                watch: setInterval(() => this.step(), 10),
                running: true
            });
        }
    }

    step() {
        if (!this.state.running) return;
        this.calculate();
    }

    calculate() {
        this.state.times.miliseconds +=1;
        if (this.state.times.miliseconds >= 100) {
            this.setState({
                times: {
                    seconds: this.state.times.seconds + 1,
                    miliseconds: this.state.times.miliseconds = 1
                }
            });
        }
        if (this.state.times.seconds >= 60) {
            this.setState({
                times: {
                    minutes: this.state.times.minutes += 1,
                    seconds: this.state.times.seconds = 0
                }
            });
        }
        this.forceUpdate();
    }

    stopStopwatch() {
        this.setState({
            running: false
        });
        clearInterval(this.state.watch);
    }
    
    addToList() {
        this.setState({ results: this.state.results.concat(this.format(this.state.times)) },
            this.props.onResultListChange(this.state.results)
        );
    }

    resetList() {
        this.setState({ results: [] },
            this.props.onResultListChange(this.state.results)
        );
    }

    resetStopwatch() {
        this.setState({
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        }); 
    }

    format(times) {
        return `${this.pad0(times.minutes)}:${this.pad0(times.seconds)}:${this.pad0(Math.floor(times.miliseconds))}`;
    }

    pad0(value) {
        let result = value.toString();
        if (result.length < 2) {
            result = '0' + result;
        }
        return result;
    }

    render () {
        return (
            <div>
                <span>{this.format(this.state.times)}</span>   
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
