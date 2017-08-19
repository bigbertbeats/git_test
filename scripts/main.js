var myImage = document.querySelector ('img');

myImage.onclick = function(){
var mySrc = myImage.getAttribute('src');
if (mySrc === 'images/corndog.jpg'){
	myImage.setAttribute ('src', 'images/baseball.jpg');
}else {
	myImage.setAttribute ('src', 'images/corndog.jpg');
}
}



var myButton = document.querySelector('button');
var myHeading = document.querySelector ('h1');

function setUserName(){
var myName = prompt('Please enter your name.');
localStorage.setItem('name', myName);
myHeading.textContent = 'Hej på dig, ' + myName;
}

if (!localStorage.getItem('name')){
	setUserName();
}else{
var storedName = localStorage.getItem('name');
myHeading.textContent = 'Hej på dig, ' + storedName;
}

myButton.onclick = function() {
setUserName();
}