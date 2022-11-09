// let number = Math.floor(Math.random()*6)
// console.log(number);

// const arr = ['cat','dog','deer','squirrel','panda','fox'];
const arr =[0,1,2,3,4,5,6,7,8,9,10,11];
var count = 0;
const compare = [];
var moving = 0;
var h=0,m =0,s=0;

function getAnimal(i,box){
    switch(i) {
        case 0: 
            assignAnimal('cat.jfif',box);
            break;
        case 11:
            assignAnimal('cat.jfif',box);
            break;
        case 1:
            assignAnimal('dog.jfif',box);
            break;
        case 10:
            assignAnimal('dog.jfif',box);
            break;
        case 2:
            assignAnimal('deer.jfif',box);
            break;
        case 9:
            assignAnimal('deer.jfif',box);
            break;
        case 3:
            assignAnimal('fox.jfif',box);
            break;
        case 8:
            assignAnimal('fox.jfif',box);
            break;
        case 4:
            assignAnimal('panda.jfif',box);
            break;
        case 7:
            assignAnimal('panda.jfif',box);
            break;
        case 5:
            assignAnimal('squirrel.jfif',box);
            break;
        case 6:
            assignAnimal('squirrel.jfif',box);
    }
}
//create image element
function assignAnimal(picName,box){
    const image = document.createElement('img');
    image.src='img/'+ picName;
    image.style.width='130px';
    image.style.height='130px';
    image.style.objectFit= 'cover';
    image.style.visibility = 'hidden';
    box.appendChild(image);
}

//get random a value from array/one animal from list.
function getRandomValue(a){
    return a[Math.floor(Math.random()*a.length)];
}

// console.log(getRandomValue(arr));

const boxes = document.getElementsByClassName('box');
function putImagesIntoBoxes(arr,boxes){
    let length = arr.length;
    let index;
    let value;
    for (let i=0; i<length; i++){
        value = getRandomValue(arr);
        getAnimal(value,boxes[i]);
        index = arr.indexOf(value);
        arr.splice(index,1);
    }
}
putImagesIntoBoxes(arr,boxes);

//reload page
function myFunction(){
    window.location.reload();
}


function showImage(boxId){
    if(count == 0){
        compare[0]= document.getElementById(boxId).firstElementChild;
        compare[0].style.visibility = 'visible';
        count++;
    } else if(count == 1){
        compare[1]= document.getElementById(boxId).firstElementChild;
        compare[1].style.visibility = 'visible';
        setTimeout(() => {
            let result = getLastSegment(compare[0]).localeCompare(getLastSegment(compare[1]));
            if (result == 0) {
                compare[0].style.opacity = '0.5';
                compare[1].style.opacity = '0.5';
            } else {
                compare[0].style.visibility = 'hidden';
                compare[1].style.visibility = 'hidden';
            }
            moving++;
            document.getElementById('moves').innerText = "Moves:" + moving;
        }, 250);
        count--;
    }
}
//console.log(boxes[0].firstElementChild.src);
// const url = boxes[0].firstElementChild.src;
// const lastSegment = url.split("/").pop();
// console.log(lastSegment);
function getLastSegment(a){
    return a.src.split("/").pop();
}

function playFunction(){
    document.querySelector('#play').remove();
    setInterval(showTimer,1000);
}

function showTimer(){
    s++;
    if(s==60){
        m++;
        s=0;
    }
    if(m==60){
        h++;
        m=0;
    }
    document.getElementById('time-count').innerHTML= h +":"+ m + ":" + s;
}