var hr=0;
var min=0;
var sec=0;
var count=0;

var watch=false;
function start(){
    watch=true;
    stopwatch();
}

function stop(){
    watch = false;
}

function restart(){
    watch=false;
    hr=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById("hour").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
}

function stopwatch(){
    if(watch){
        count++;
        if(count==100){
            count=0;
            sec++;
        }
        if(sec==60){
            sec=0;
            min++;
        }
        if(min==60){
            min=0;
            hr++;
        }
        let shr=hr;
        let smin=min;
        let ssec=sec;
        let scount=count;

        if(shr<10){
            shr ="0"+ shr;
        }
        if(smin<10){
            smin ="0"+ smin;
        }
        if(ssec<10){
            ssec ="0"+ ssec;
        }
        if(scount<10){
            scount ="0"+ scount;
        }
        document.getElementById("hour").innerHTML=shr;
        document.getElementById("min").innerHTML=smin;
        document.getElementById("sec").innerHTML=ssec;
        document.getElementById("count").innerHTML=scount;
        
        setTimeout(stopwatch,10);
    }
}