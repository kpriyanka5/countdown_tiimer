const newYears="1 Jan 2022";
const days=document.getElementById('days');
const hours=document.getElementById('hours');
const mins=document.getElementById('mins');
const secs=document.getElementById('secs');
function countdown(){
    const currentDate=new Date();
    const newYearsDate=new Date(newYears);
    //console.log(currentDate-newYearsDate);
    const seconds=(currentDate-newYearsDate)/1000;
    const daysEl=Math.floor(seconds/3600/24);
    const hoursEl=Math.floor(seconds/3600)%24;
    const minutesEl=Math.floor(seconds/60)%60;
    const totsec=Math.floor(seconds)%60;
    days.innerHTML=formatTime(daysEl);
    hours.innerHTML=formatTime(hoursEl);
    mins.innerHTML=formatTime(minutesEl);
    secs.innerHTML=formatTime(totsec);
}
function formatTime(time)
{
    return time<10?(`0${time}`):time;
}
countdown();
setInterval(countdown,1000);