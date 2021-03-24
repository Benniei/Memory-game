// Global Constants

const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//Global Variables
var pattern = [];
var numblock = 8;
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5
var guessCounter = 0;
var num_pieces = 0;
var clueHoldTime = 1000;
var mistake = 0;
var timer = document.querySelector(".timer");
var time = 0;
var second = 0;

function startGameEasy(){
    //reset progress
    progress = 0;
    mistake = 2;
    //game started
    gamePlaying = true;
    clueHoldTime = 1000;
    pattern = [];
    generatePattern(8, 4);
    //changes the element of the start and stop button
    document.getElementById("Mistakes").innerHTML = mistake;
    document.getElementById("startBtn1").classList.add("hidden");
    document.getElementById("startBtn2").classList.add("hidden");
    document.getElementById("startBtn3").classList.add("hidden");
    //document.getElementById("timer").classList.remove("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    startbutton(4, 1);
    playClueSequence();
}

function startGameMedian(){
    //reset progress
    progress = 0;
    mistake = 1;
    //game started
    gamePlaying = true;
    clueHoldTime = 1000;
    pattern = [];
    generatePattern(8, 8);
    //changes the element of the start and stop button
    document.getElementById("Mistakes").innerHTML = mistake;
    document.getElementById("startBtn1").classList.add("hidden");
    document.getElementById("startBtn2").classList.add("hidden");
    document.getElementById("startBtn3").classList.add("hidden");
    //document.getElementById("timer").classList.remove("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    startbutton(8,1);
    playClueSequence();
}

function startGameHard(){
    //reset progress
    progress = 0;
    //game started
    mistake = 0;
    gamePlaying = true;
    clueHoldTime = 1000;
    pattern = [];
    generatePattern(8, 12);
    console.log(pattern);
    //changes the element of the start and stop button
    document.getElementById("Mistakes").innerHTML = mistake;
    document.getElementById("startBtn1").classList.add("hidden");
    document.getElementById("startBtn2").classList.add("hidden");
    document.getElementById("startBtn3").classList.add("hidden");
    //document.getElementById("timer").classList.remove("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    startbutton(12,1);
    playClueSequence();
}

function startbutton(btn, flag){
  var i;
  if(flag == 1){
    for(i = 1; i <= btn; i++){
      document.getElementById("button"+i).classList.remove("hidden");
    }
  }
  else if(flag == 0){
    for(i = 1; i <= btn; i++){
      document.getElementById("button"+i).classList.add("hidden");
    }
  }
}

function generatePattern(turns, num_blocks){
  var i;
  for(i = 0; i < turns; i++){
    pattern.push(Math.floor((Math.random() * num_blocks) + 1));
  }
}

function stopGame(){
    //end game
    gamePlaying = false;

    //changes the element of start and stop back to what it use to be
    document.getElementById("startBtn1").classList.remove("hidden");
    document.getElementById("startBtn2").classList.remove("hidden");
    document.getElementById("startBtn3").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    //document.getElementById("timer").classList.add("hidden");
    timer.innerHTML = 0+" secs";
    clearInterval(time)
    
    startbutton(12, 0);
}

//lights the button
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
//clears the button
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}


function playClueSequence(){
  guessCounter = 0;
  clueHoldTime -= 50;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  second = 120
  time = setInterval(function(){
        timer.innerHTML = second+" secs";
        second--;
        if(second == -2){
          testlose();
        }
    },1000);
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(btn == pattern[guessCounter]){//current guess correct
      //check if at the end of current iteration
      if(guessCounter == progress){
        //check if end of pattern array
        if(guessCounter == pattern.length - 1){
          clearInterval(time);
          winGame();
        }
        //if not continue to the next step
        else{
          progress++;
          clearInterval(time);
          playClueSequence();
        }
      }
      //else keep going
      else{
        guessCounter++;
      }
  }
  else{//current guess incorrect
    testlose();
  }
}

function testlose(){
    mistake--;
    if(mistake < 0){
      clearInterval(time);
      loseGame();
    }  
    else{
      document.getElementById("Mistakes").innerHTML = mistake;
      alert("Mistake Made, Try again... Turn Resetted");
      playClueSequence(); //restarts the turn
    }
}
function loseGame(){
  clearInterval(time);
  timer.innerHTML = 0+" secs";
  stopGame();
  alert("Game Over. You lost.")
}

function winGame(){
  stopGame();
  alert("Game Over. You won!")
}

// Sound Synthesis Functions
const freqMap = {
  1: 300.9,
  2: 100.2,
  3: 240,
  4: 400,
  5: 200,
  6: 300.5,
  7: 200.1,
  8: 260,
  9: 100,
  10: 150,
  11: 600,
  12: 450
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)