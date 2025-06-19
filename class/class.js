class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer = null;
  }

  render() {
    const date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    const output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}

let clock = new Clock({ template: 'h:m:s' });
clock.start();
// To stop the clock after 5 seconds
setTimeout(() => {
  clock.stop();
  console.log('Clock stopped');
}, 5000);