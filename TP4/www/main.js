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