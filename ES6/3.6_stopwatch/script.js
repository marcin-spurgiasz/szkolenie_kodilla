class Stopwatch {
    constructor(display, results) {
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
        this.results = results;
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);        
        }
    }

    step() {
        if (!this.running) return;
            this.calculate();
            this.print();
    }

    calculate() {
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

    stop() {
        this.running = false;
        clearInterval(this.watch);
    }

    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }

    addTime() {
        var li = document.createElement('li');
        li.setAttribute("class", "singleTime")
        li.appendChild(document.createTextNode(this.format(this.times)));
        this.results.appendChild(li);
    }

    resetTimes() {
        this.results.innerHTML ='';
    }

    print() {
        this.display.innerText = this.format(this.times);
    }

    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }
}

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

const stopwatch = new Stopwatch(document.querySelector('.stopwatch'), document.querySelector('.results'));
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
