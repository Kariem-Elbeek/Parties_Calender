// Menu Bar Slide
$('#menuBtnBox').click(function(){
    barWidth = $('#innerBar').css("width");
    barDefaultWidth = parseFloat($('#itemsbar').css("width")) + parseFloat($('#closeBtnBox').css("width"));
    if (barWidth == "0px"){
        $('#innerBar').animate({width: barDefaultWidth}, 500);
    }
    else{
        $('#innerBar').animate({width: "0px"}, 500);
    }
});

// Menu Bar Close Button

let closeBtn = document.getElementById('closeBtn');
$(closeBtn).click(function(){
    $('#innerBar').animate({width: "0px"}, 500);
})

// Party Menu Slide

$('.partySegment h3').click(function(e){
    siblingsElements = [];
    siblingsElements = $(e.target).parent().siblings();
    for (i = 0; i < siblingsElements.length; i++){
        if ($(siblingsElements[i]).find('p').css("display") == "block"){
            $(siblingsElements[i]).find('p').slideToggle();
        }
    }
    
    $(e.target).next().slideToggle();

    console.log(siblingsElements);
})

// Counters

let dayCounter = document.getElementById('dayCounter');
let hourCounter = document.getElementById('hourCounter');
let minuteCounter = document.getElementById('minuteCounter');
let secondCounter = document.getElementById('secondCounter');


let countDownDate = new Date("Sep 5, 2022 15:37:25").getTime();

function counter() {

    let now = new Date().getTime();
  
    let distance = countDownDate - now;
  
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    dayCounter.innerHTML = days;
    hourCounter.innerHTML = hours; 
    minuteCounter.innerHTML = minutes; 
    secondCounter.innerHTML = seconds;
  }
  setInterval(counter, 1000);

//   Countdown Characters

let textInput = document.getElementById('textInput');
let count100 = document.getElementById('count100');

$('#textInput').keyup(function(){
    let textInputLength = textInput.value.length;
    count100.innerHTML = 100 - textInputLength;
})

