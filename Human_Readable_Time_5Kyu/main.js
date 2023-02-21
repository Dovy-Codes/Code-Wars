//Ok there must be a way better way to do this, I'll have to come back to this but it's solved
function humanReadable (seconds) {
    let secondCount;
    let minuteCount;
    let hourCount;
    function add0(number){
        if(number.toString().length == 1){
                return number = "0" + number.toString()
            }
            else if (number.toString().length == 0){
                return number = "00";
            }
            else { return number = number.toString() }
        }
    if(seconds % 60 === 0 && seconds != 0) {
        secondCount = "00"
        minuteCount = seconds / 60;
    }
    else if(seconds>59){
        seconds = (seconds/60).toString().split(".");
        secondCount = "0." + seconds[1];
        secondCount = parseInt(Math.round(secondCount*60));
        secondCount = add0(secondCount);
        minuteCount = parseInt(seconds[0]);
    }
    else{
        secondCount = add0(seconds);
        return "00:00:" + secondCount;
    };

    if (minuteCount % 60 === 0 && minuteCount != 0) {
        hourCount = minuteCount / 60;
        hourCount = add0(hourCount)
        minuteCount = "00"  
    }
    else if(minuteCount>59){
        minuteCount = (minuteCount/60).toString().split(".");
        hourCount = parseInt(minuteCount[0]);
        hourCount = add0(hourCount);
        minuteCount = "0." + minuteCount[1];
        minuteCount = parseInt(Math.round(minuteCount*60));
        minuteCount = add0(minuteCount);
    }
     else{
        minuteCount = add0(minuteCount);
        return "00:"+ minuteCount + ":" + secondCount;
    }
    return hourCount + ":" + minuteCount + ":" + secondCount;
}

console.log(humanReadable(4485))
console.log(0 % 60 === 0)