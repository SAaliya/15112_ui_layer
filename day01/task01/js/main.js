// alert("welcome to FIREFOX");


const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mozilla.png') {
      myImage.setAttribute('src','images/moz.png');
    } else {
      myImage.setAttribute('src','images/mozilla.png');
    }
}

let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name!!');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool Welcome, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  