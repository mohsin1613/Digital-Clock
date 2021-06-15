function clock(){
    var date=new Date();
    var hours=date.getHours();
    var minites=date.getMinutes();
    var seconds=date.getSeconds();
  var timeformat="AM";
  timeformat=(hours >=12)? "PM":"AM";

    if(hours==0) 
    {
        hours=12;
    }
    else{
     if(hours>12) 
     {
         hours=hours-12;
    }
     else {
         hours=hours;
        }
    }

    hours=updateTime(hours);
    minites=updateTime(minites);
    seconds=updateTime(seconds);


    document.getElementById('time').innerText=hours+" : "+minites+" : "+seconds+" "+timeformat;

    var timeout=setTimeout(clock,1000);
}

function updateTime(time)
{
 if(time<10){
     return "0"+time;
 }
 else{
     return time;
 }


}

clock();