// document.getElementById("count-el").innerText = 4
// Javascript runs from the top down

// function increment() {
//     console.log("button clicked");
// }

// function Dog(params) {
//     console.log(42);
// }

// Dog()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function totalLapTime(params) {
//     console.log(lap1 + lap2 + lap3);
// }

// totalLapTime()

// let lapsCompleted = 0

// function incrementOne() {
//     lapsCompleted = lapsCompleted + 1
//     lapsCompleted = lapsCompleted + 1
//     lapsCompleted = lapsCompleted + 1
    
//     console.log(lapsCompleted);
// }

// incrementOne()


// document.getElementById("count-el").innerText = 4
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0;

// console.log(saveEl);

function increment() {
    count += 1

    countEl.textContent = count 

    // console.log(countEl.textContent);
}




function save() {
    let countStr = count + " - " 
    
    saveEl.textContent += countStr
    // console.log(count);
    countEl.textContent = 0
    count = 0
    // console.log(saveEl.textContent);
}




// let welcomeEl = document.getElementById("welcome-el")

// let name = "Joys Augustus";
// let greeting = "Hi, my name is ";

// welcomeEl.innerText = greeting + name


// // welcomeEl.innerText = welcomeEl.innerText + 👋;
// // count = count + "👋";
// welcomeEl.innerText += "👋";

