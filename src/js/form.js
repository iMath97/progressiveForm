// variables
let inputInfo = {name: "", email: "", phonenumber: "", callFrom: "", callTo: "", reason: "", message: ""};
let screenNumber = 0;

// dom content
let nameP = document.querySelector("#nameP");
let nameF = document.querySelector("#name");
let mailP = document.querySelector("#mailP");
let mailF = document.querySelector("#email");
let nextbtn = document.querySelector("#nextbtn");
let backbtn = document.querySelector("#backbtn");

showInputScreen();
btnVis();


// event listeners
backbtn.addEventListener("click", () => {
    screenNumber--;
    showInputScreen();
    btnVis();
});

nextbtn.addEventListener("click", () => {
    saveInfo();
    screenNumber++;
    showInputScreen();
    btnVis();
});


// functions
function showInputScreen(){
    console.log(screenNumber);
    switch (screenNumber) {
        case 0:
            nameP.style.display = "block";
            nameF.style.display = "block";
            mailP.style.display = "none";
            mailF.style.display = "none";
            break;
        case 1:
            nameP.style.display = "none";
            nameF.style.display = "none";
            mailP.style.display = "block";
            mailF.style.display = "block";
            break;
    
    }
}

function btnVis(){
    if(screenNumber == 0){
        backbtn.style.display = "none";
    } else {
        backbtn.style.display = "block";
    }
}

function saveInfo(){
    switch (screenNumber) {
        case 0:
            inputInfo.name = nameF.value;
            console.log(inputInfo.name);
            break;
        case 1:
            inputInfo.email = mailF.value;
            console.log(inputInfo.email);
            break;
    
    }
}