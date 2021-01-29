const circleElement = document.querySelector('.circle');
const timeElement = document.querySelector('.time');
const timeModelElement = document.querySelector('.time-mode');
const turnElement = document.querySelector('.turns');
const conrolButton = document.querySelector('.time-control');
const resetButton = document.querySelector('.reset-control');
const notificationSound = document.querySelector('#notification');

let isRunning,
    isBreakTime,
    workTime,
    breakTime,
    longBreakTime,
    totalTurns,
    currentTurn,
    totalTime,
    timeRemainig,
    timer;

function startValues(){
    isRunning = false;
    isBreakTime = false;
    workTime = 25*60;
    breakTime = 5*60;
    longBreakTime = 15*60;
    totalTurns = 4;
    currentTurn = 1;
    totalTime = workTime;
    timeRemainig = totalTime;
    timer = null;
}

function setCirclePercent(percent){
    const circlePerimeter = 597;
    const dashOffset = (circlePerimeter * (percent / 100));
    circleElement.style.setPropety('--dash-offset', circlePerimeter - dashOffset);
}