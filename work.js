var i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i);
    
    
    if(i==300){
    
    window.navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]);
    
    }
    
    setTimeout("timedCount()",500);
}

timedCount(); 
