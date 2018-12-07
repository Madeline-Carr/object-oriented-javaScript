
//Project 1: Stopwatch
const sw = new Stopwatch();

function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    this.start = function () {
        if (running) {
            throw new Error("The timer is already running.");
        }
        running = true;
        startTime = new Date();
    };
    this.stop = function () {
        if (!running) {
            throw new Error("The timer is not running!");
        }

        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };
    this.reset = function () {
        duration = 0;
        running = false;
        startTime = null;
        endTime = null;
    };
    Object.defineProperty(this, "duration", {
        get: function () { return duration; }
    });
}
console.log(sw.duration);
