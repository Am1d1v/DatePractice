


/*

let now = new Date();
let start = new Date(0);
let someDate = new Date("2023-01-01")
console.log(now);
console.log(someDate);
console.log(start);


*/

/*
let now = new Date();
let currentDate = new Date("2023-05-27");
//console.log(now.getTime());
//console.log(currentDate.getTime());

let t = currentDate - now;
let d = document.querySelector(".timer");
//console.log(t)
//timeUpdate();
*/

function setClock(){
    let now = new Date();
let currentDate = new Date("2023-05-27"),
     t = currentDate - now,
     d = document.querySelector(".timer");

    d.textContent = Math.floor((t / 1000));
}

setInterval(setClock, 1000);

/*

function timeUpdate(){
    setInterval(setClock, 1000);
}

*/


//setInterval(timeUpdate, 100);

/*

function hello(){
    console.log("hello");
}

setInterval(hello,1000);

*/

/*

let btn = document.querySelector(".timer"),
    num = 3;


function sum(){
    num += 1;
    btn.innerHTML = num;
    return num;
}

setInterval(sum, 1000);

*/