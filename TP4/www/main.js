function popup(){
    alert('Don\'t click here');
}

function pouet(){
    var element = document.getElementById("hello");
    console.log(element);
    element.textContent ='Pouet';
}

function addElement(){
    var element = document.getElementById('textBox').value;
    document.getElementById('listeDes').innerHTML= document.getElementById('listeDes').innerHTML + '<li>' + element + '</li>';
    document.getElementById('textBox').value = '';
}

function random(){
    var element = document.getElementById('maxValue').value;
    document.getElementById('randomResult').textContent = 1+Math.floor(Math.random() * Math.floor(element));
}

function add(){
    var val1 = parseInt(document.getElementById('val1').value);
    var val2 = parseInt(document.getElementById('val2').value);
    document.getElementById('addResult').textContent = val1+val2;
}
/*
function newTimer(){

}
class minuteur{
    constructor (h,m,s){
        var time;
        this.h = h;
        this.m = m;
        this.s = s;
        hChrono = '00';
        mChrono = '00';
        sChrono = '00';
    } 
*/
var time;
    function timerS(){
        var seconde = parseInt(document.getElementById('secondeChoisie').value);
        var minute = parseInt(document.getElementById('minuteChoisie').value);
        if((seconde == 60)&(minute <60))
        {
            document.getElementById('minuteChoisie').value = minute + 1;
            document.getElementById('secondeChoisie').value = 0;
        }
    }

    function timerM(){
        var minute = parseInt(document.getElementById('minuteChoisie').value);
        var heure = parseInt(document.getElementById('heureChoisie').value);
        if ((minute == 60)&(heure <23)){
            document.getElementById('heureChoisie').value = heure + 1;
            document.getElementById('minuteChoisie').value = 0;
        }
    }
    function goTimer(){
        time = setInterval(timer,100);
        console.log('goTimer');
    }

    function stopTimer(){
        clearInterval(time);
    }

    function zeroTimer(){
        clearInterval(time);
        document.getElementById('seconde').textContent = 00;
        document.getElementById('minute').textContent = 00;
        document.getElementById('heure').textContent = 00;
    }
    function timer(){
        var heure = parseInt(document.getElementById('heure').textContent);
        var minute = parseInt(document.getElementById('minute').textContent);
        var seconde = parseInt(document.getElementById('seconde').textContent);
        var heureA = parseInt(document.getElementById('heureChoisie').value);
        var minuteA = parseInt(document.getElementById('minuteChoisie').value);
        var secondeA = parseInt(document.getElementById('secondeChoisie').value);
        if (seconde <59)
        {
            if (seconde<9)
                document.getElementById('seconde').textContent = String('0')+String(seconde +1);
            else
                document.getElementById('seconde').textContent = seconde +1;
        }else if ((seconde==59)&(minute<59))
        {
            document.getElementById('seconde').textContent = '00';
            if(minute <9)
                document.getElementById('minute').textContent = String('0')+String(minute +1);
            else document.getElementById('minute').textContent = minute +1;
        
        }else if ((seconde==59)&(minute==59)&(heure<23))
        {
            document.getElementById('seconde').textContent = '00';
            document.getElementById('minute').textContent = '00';
            if(heure <9)
                document.getElementById('heure').textContent =  String('0')+String(heure +1);
            else document.getElementById('heure').textContent = heure +1;
        }
        heure = parseInt(document.getElementById('heure').textContent);
        minute = parseInt(document.getElementById('minute').textContent);
        seconde = parseInt(document.getElementById('seconde').textContent);
        if ((heure==heureA)&&(minute==minuteA)&&(seconde==secondeA)) stopTimer();
    }
