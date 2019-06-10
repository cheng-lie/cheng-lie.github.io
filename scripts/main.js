let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dog1.png') {
        myImage.setAttribute('src', 'images/赛里木湖.png')
    } else {
        myImage.setAttribute('src', 'images/dog1.png')
    }
}

function setHeading(name) {
    myHeading.textContent = 'JavaScript真是太有趣了，你说呢，' + name + '？';
}
function setUserName() {
    let myName = prompt('请输入你的名字:');
    localStorage.setItem('name', myName);
    setHeading(myName)
}

let storedName = localStorage.getItem('name');
if(!storedName) {
    setUserName()
} else (
    setHeading(storedName)
)

let myButton = document.querySelector('button')
myButton.onclick = setUserName;