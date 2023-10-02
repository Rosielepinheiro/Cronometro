const minutosEl= document.querySelector("#minutos");
const segundosEl= document.querySelector("#segundos");
const milisegundosEl= document.querySelector("#milisegundos");
const startBtn= document.querySelector("#startBtn");
const pauseBtn= document.querySelector("#pauseBtn");
const resumeBtn= document.querySelector("#resumeBtn");
const resetBtn= document.querySelector("#resetBtn");

let interval;
let minutos= 0;
let segundos = 0;
let milisegundos = 0;
let isPaused = false;

startBtn.addEventListener("click", startimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click",resumeTimer);
resetBtn.addEventListener("click",resetTime);

function startimer(){

    interval = setInterval(() =>{

        if(!isPaused){

            milisegundos += 10

            if(milisegundos === 1000){
                segundos++;
                milisegundos = 0;
            }
            if(segundos === 60) {
                minutos++;
                segundos = 0;
            }
            minutosEl.textContent= formatTime (minutos);
            segundosEl.textContent= formatTime (segundos);
            milisegundosEl.textContent= formatMilisegundos (milisegundos);
        }

    },10 )


}
 function pauseTimer(){
    isPaused = true
 }

 function resumeTimer(){
    isPaused = false

 }
 function resetTime(){
    clearInterval(interval);
    minutos = 0;
    segundos = 0;
    milisegundos = 0;

    minutosEl.textContent = "00";
    segundosEl.textContent = "00";
    milisegundosEl.textContent = "000";

    startBtn.style.display = "block";
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "block";


 }

function formatTime(time){
return time < 10 ? `0${time}` : time;
}
function formatMilisegundos(time) {
return time <100 ? `${time}`.padstart(3,"0"):time;

}