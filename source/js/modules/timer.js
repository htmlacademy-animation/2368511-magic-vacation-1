export default () => {
  let secondsRemaining;
  let intervalHandle;
  function tick() {
    let timeDisplay = document.getElementById(`timer`);

    let min = Math.floor(secondsRemaining / 60);
    let sec = secondsRemaining - (min * 60);

    if (sec < 10) {
      sec = `0` + sec;
    }

    let message = min.toString() + `:` + sec;
    timeDisplay.innerHTML = message;
    secondsRemaining--;
  }
  function startCountdown() {
    let minutes = 5;
    secondsRemaining = minutes * 60;
    intervalHandle = setInterval(tick, 1000);
  }
  requestAnimationFrame(startCountdown);
};
