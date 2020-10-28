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
var id = 0;
function newTimer(){
    new minuteur(parseInt(document.getElementById('heureChoisie').value),parseInt(document.getElementById('minuteChoisie').value),parseInt(document.getElementById('secondeChoisie').value),id);
    id = id +1;
}

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

class minuteur{
    constructor (h,m,s,id){
        this.time;
        this.h = h;
        this.m = m;
        this.s = s;
        this.id = id;
        this.hChrono = 0;
        this.mChrono = 0;
        this.sChrono = 0;
        this.newLine = document.createElement('TR');
  
        //this.newLine = document.createElement('TR');
        document.body.appendChild(this.newLine);
        
        var TD1 = document.createElement('TD');
        this.newLine.insertAdjacentElement('afterbegin',TD1);

        var h2timer = document.createElement('H2');
        h2timer.className='timer';
        h2timer.innerHTML = '<span id=\'heure'+id+'\'>00</span>:<span id=\'minute'+id+'\'>00</span>:<span id=\'seconde'+id+'\'>00</span>';
        TD1.insertAdjacentElement('afterbegin',h2timer);

        var TD2 = document.createElement('TD');
        this.newLine.insertAdjacentElement('beforeend',TD2);

        var buttonGo = document.createElement('button');
        buttonGo.onclick = () => this.goTimer();
        buttonGo.textContent = 'Go!';
        TD2.insertAdjacentElement('beforeend',buttonGo);

        var TD3 = document.createElement('TD');
        this.newLine.insertAdjacentElement('beforeend',TD3);

        var buttonStop = document.createElement('button');
        buttonStop.onclick = () => this.stopTimer();
        buttonStop.textContent = 'Stop!';
        TD3.insertAdjacentElement('beforeend',buttonStop);

        var TD4 = document.createElement('TD');
        this.newLine.insertAdjacentElement('beforeend',TD4);

        var buttonRaz = document.createElement('button');
        buttonRaz.onclick = () => this.zeroTimer();
        buttonRaz.textContent = 'RaZ';
        TD4.insertAdjacentElement('beforeend',buttonRaz);
    } 

    setHeure(h){
        console.log(h);
        if (parseInt(h)<10)
            document.getElementById('heure'+this.id).textContent =String('0')+String(parseInt(h));
        else document.getElementById('heure'+this.id).textContent = h;
        this.hChrono = h;
    }

    setMinute(m){
        console.log(m);
        if (parseInt(m)<10)
            document.getElementById('minute'+this.id).textContent =String('0')+String(parseInt(m));
        else document.getElementById('minute'+this.id).textContent = m;    
        this.mChrono = m;
    }

    setSeconde(s){
        console.log(s);
        if (parseInt(s)<10)
            document.getElementById('seconde'+this.id).textContent =String('0')+String(parseInt(s));
        else document.getElementById('seconde'+this.id).textContent = s; 
        this.sChrono = s;  
    }

    goTimer(){
        //console.log(time);
        this.time = setInterval(this.timer,1000);
        console.log('goTimer');
        console.log(this.sChrono);
    }

    stopTimer(){
        clearInterval(this.time);
    }

    zeroTimer(){
        clearInterval(this.time);
        this.setHeure(0);
        this.setMinute(0);
        this.setSeconde(0);
    }
    
    timer(){
        console.log('GOOOOO');
        console.log(this.sChrono);
        if (this.sChrono <59)
        {
            this.setSeconde(parseInt(this.sChrono)+1);
        }else if ((this.sChrono==59)&(this.mChrono<59))
        {
            this.setSeconde(0);
            this.setMinute(parseInt(this.mChrono)+1);        
        }else if ((this.sChrono==59)&(this.mChrono==59)&(this.hChrono<23))
        {
            this.setSeconde(0);
            this.setMinute(0);    
            this.setHeure(parseInt(this.hChrono)+1);    
            
        }
        if ((this.h==this.hChrono)&&(this.m==this.mChrono)&&(this.s==this.sChrono)) this.stopTimer;
    }
}