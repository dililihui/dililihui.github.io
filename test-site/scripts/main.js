let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/food.jpg'){
        myImage.setAttribute('src','images/chickenfoot.jpg');
    } else {
        myImage.setAttribute('src', 'images/food.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('please input your name:');
    if(!myName || myName === null) {
        setUserName();
    }else{
    localStorage.setItem('name', myName);
    myHeading.textContent = '沪囧——品味上海格调 ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '沪囧——品味上海格调 ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}