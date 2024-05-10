function startTimer() {
    var timeInput = document.getElementById('timeInput').value;
    var timerDisplay = document.getElementById('timerDisplay');
    var buzzer = document.getElementById('buzzer');
  
    var time = parseInt(timeInput);
    var minutes, seconds;
  
    var countdown = setInterval(function() {
      minutes = parseInt(time / 60, 10);
      seconds = parseInt(time % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      timerDisplay.textContent = minutes + ":" + seconds;
  
      if (--time < 0) {
        clearInterval(countdown);
        timerDisplay.textContent = "00:00";
        buzzer.play();
      }
    }, 1000);
  }
  