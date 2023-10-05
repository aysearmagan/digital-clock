function printTime() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  
  if (hours >= 12) {
    document.querySelector("#ampm").innerHTML = "PM";
    hours = hours - 12;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if(minutes<10){
    minutes="0"+minutes;
  }
  if(seconds<10){
    seconds="0"+seconds;
  }
  document.querySelector("#seconds").innerHTML = seconds;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#hours").innerHTML = hours;
  document.querySelectorAll(".separator").forEach(el=>el.innerHTML= seconds%2===0?":":" ");

  setTimeout(printTime, 1000);
}

printTime();
