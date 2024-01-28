/*  Overview
    This application simulates a simple stop watch on the page.  The user 
    can start, stop or reset the clock using the buttons and link on the page.

    There are 3 global variables that are used to keep track of the "state"
    of the application.
    -  isRunning - is a boolean that keeps track of whether the stopwatch is running or paused
    -  elapsedTime - is an integer that represents number of seconds that the stopwatch has been running
    -  timer - a reference to the code that fires at 1 second intervals that updates the clock

    There are 3 functions that are associated with the click event handler for the buttons
    and link on the page.  stopTimer, startTimer and resetTimer.

    There are 3 "helper" functions
    -   init is called when the page loads to set up the page
    -   incrementTimer is called at one second intervals to update the page
    -   pad is used to make sure that min or sec that are 1 digit can be displayed as 2
        digits by adding a leading zero
*/
/*
    Create 3 global variables, isRunning, timer and elapsedTime.
    Initialize them to false, null and 0 respectively.
*/
var isRunning = false;
var timer = null;
var elapsedTime = 0;

function init()
{
    // Put the element on the page with an id of start in a variable
    // Do the same for the stop button and the reset button
    var startBtn = document.getElementById("start");
    var stopBtn = document.getElementById("stop");
    var resetBtn = document.getElementById("reset");

    // Add an onclick handler to each of the buttons
    // The functions startTimer, stopTimer and resetTimer should fire when one of the buttons is clicked
    startBtn.onclick = startTimer;
    stopBtn.onclick = stopTimer;
    resetBtn.onclick = resetTimer;

}


function startTimer() {
    //console.log("start");
    // if the timer is NOT running, start it by
        // set the isRunning variable to true
        // call the function setInterval to call the function incrementTimer every second
        // save the timer in a the timer variable so you can stop the timer later on
    //end if
    if (isRunning == false) {
        isRunning = true;
        timer = setInterval(incrementTimer,1000);
    }
}

function incrementTimer() {
    //console.log("increment");
    // increment the elapsedTime
    // calculate the number of minutes and seconds by
    // minutes = the integer portion of (elapsedTime / 60)
    // seconds = the remainder when dividing elapsedTime by 60
    elapsedTime++;
    var minutes = Math.floor(elapsedTime / 60);
    var seconds = Math.floor(elapsedTime % 60);


    // call the function pad to make sure there's a leading 0 on minutes if necessary
    // call the function pad to make sure there's a leading 0 on seconds if necessary
    // write minutes to the element on the page
    // write second to the element on the page
    document.getElementById("minutes").innerHTML = pad(minutes);
    document.getElementById("seconds").innerText = pad(seconds);


}

function pad(number) {
    // add a leading 0 to number if the number is < 10
    // return number
    /*if (number < 10)
        return "0" + number;
    else   
        return number;
    */
    return (number < 10) ? "0" + number:number;
}

function stopTimer() {
    //console.log("stop");
    // if the timer is running, stop it by
        // set isRunning to false
        // call the function clearInterval to stop the timer
    // end if
    if (isRunning==true) {
        isRunning = false;
        clearInterval(timer);
    }
}

function resetTimer() {
    //console.log("reset");
    // stop the timer by calling stopTimer
    stopTimer();
    // set the elapsedTime back to 0
    elapsedTime=0;
    // write 00 to the elements on the page for minutes and seconds
    document.getElementById("minutes").innerHTML = pad(0);
    document.getElementById("seconds").innerText = pad(0);

}

// When the page has finished loading, call the function init
window.onload = init;


