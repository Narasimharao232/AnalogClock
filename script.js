setInterval(function(){
  date = new Date();
  currentHour = date.getHours()
//   console.log(currenthour)
    currentMin= date.getMinutes()
    // console.log(currentMin)
    currentSecond = date.getSeconds()
    // console.log(currentSecond)

    hoursRotation = 30*currentHour + currentMin/2;
    minsRotation =  6*currentMin;
    secondsRotation = 6*currentSecond;

    hours.style.transform = `rotate(${hoursRotation}deg)`
    mins.style.transform = `rotate(${minsRotation}deg)`
    seconds.style.transform = `rotate(${secondsRotation}deg)`
}, 1000);