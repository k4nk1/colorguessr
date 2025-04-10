const circle = document.getElementById("circle");
const red_slider = document.getElementById("red_slider");
const green_slider = document.getElementById("green_slider");
const blue_slider = document.getElementById("blue_slider");

red_slider.addEventListener("input", onSliderChange);
green_slider.addEventListener("input", onSliderChange);
blue_slider.addEventListener("input", onSliderChange);

var answer_color = [0, 0, 0];
var showing_color = [0, 0, 0];

function onSliderChange(){
    const current_color = [red_slider.value, green_slider.value, blue_slider.value];
    circle.style.backgroundColor = toColorCode(current_color);
    if(Math.abs(current_color[0]-answer_color[0]) < 8 &&
    Math.abs(current_color[1]-answer_color[1]) < 8 &&
    Math.abs(current_color[2]-answer_color[2]) < 8 ){
        changeAnswerColor();
    }
}

function toColorCode(color){
    return "#" + toHex(color[0]) + toHex(color[1]) + toHex(color[2]);
}

function toHex(n){
    return ("00" + Number(n).toString(16)).slice(-2);
}

function changeAnswerColor(){
    answer_color = [random(), random(), random()];
    document.body.style.backgroundColor = toColorCode(answer_color);
}

function random(){
    return Math.floor(Math.random() * 256);
}