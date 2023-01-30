var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/first.jpg') {
      myImage.setAttribute ('src','images/second.jpg');
    } else {
      myImage.setAttribute ('src','images/first.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Мне нужно твое имя.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Мур, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Мур, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
  