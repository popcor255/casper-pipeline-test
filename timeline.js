const p1 = [["8:00", "8:45"], ["9:31", "12:37"],["13:07", "13:30"]];
const p2 = [["8:00", "9:31"], ["9:45", "12:31"],["13:10", "13:30"]];
const time = 30;

function test1(p1, p2, time){
    let timeline1 = getAvaliability(timelineStrToInt(p1), time);
    let timeline2 = getAvaliability(timelineStrToInt(p2), time);
    let timeSlot = [];

    for(var i = 0; i < timeline1.length; i++){
        let meetingRequest = timeline1[i];
        for(var j = 0; j < timeline2.length; j++){
            let timestamp = timeline2[j];
            timeSlot = timestampIntToStr(isAvaliable(meetingRequest, timestamp, time));
        }
    }

    return timeSlot;
}

function timelineStrToInt(arr){
    return arr.map(timestamp => timestamp.map(time => timeStrToInt(time)));
}

function timeStrToInt(str){
    let timestamp = str.split(":");
    let hours = Number(timestamp[0]);
    let minutes = Number(timestamp[1]);

    return (hours * 60) + minutes;
}

function getAvaliability(timeline, time){
    timeline = getRemainingTimeStamps(timeline);
    return timeline;
}

function getRemainingTimeStamps(timeline){
    var remainingTime = [];

    for(var i = 0; i < timeline.length - 1; i++){
        remainingTime.push([timeline[i][1], timeline[i + 1][0]]);
    }
    
    return remainingTime;
}

function isAvaliable(time1, time2, amountNeeded){
    var startTime = Math.max(time1[0], time2[0]);
    var endTime = Math.min(time1[1], time2[1]);

    if(isInBounds(time1, time2)){
        if(endTime - startTime >= amountNeeded){
            return [startTime, endTime];
        }
    }

    return [];
}

function isInBounds(time1, time2){
    if(time1[1] > time2[0]){
        return true;
    }
    
    if(time2[1] > time1[0]){
        return true;
    }

    return false;
}

function timestampIntToStr(timestamp){
    return timestamp.map(ele => numIntToStr(ele));
}

function numIntToStr(num){
    var hours = Math.floor(num / 60);
    var minutes = (num % 60) + "";

    if(minutes.length == 1){
        minutes += "0";
    }

    return hours + ":" + minutes;
}



console.log(test1(p1, p2, time));