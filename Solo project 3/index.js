const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T" ,"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let onlyLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let onlyLetters2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let password1 = document.getElementById("result1");
let password2 = document.getElementById("result2");
let symbolsCheck = document.getElementById("symbols")
let numbersCheck = document.getElementById("numbers")
const increaseBtn = document.getElementById("plus");
const decreaseBtn = document.getElementById("minus");
let totalLenght = document.getElementById("passwordLenght")
let passwordLenght = 8;

increaseBtn.addEventListener("click", increaseNumber);
decreaseBtn.addEventListener("click", decreaseNumber);

function increaseNumber() {
  if (passwordLenght < 16) {
    passwordLenght++;
  }
  totalLenght.innerHTML = `<div style="">Password Lenght: ${passwordLenght}</div>`
}

function decreaseNumber() {
  if (passwordLenght > 8) {
    passwordLenght--;
  }
  totalLenght.innerHTML = `<div style="">Password Lenght: ${passwordLenght}</div>`
}

function lettersSymbols() {
    onlyLetters = onlyLetters.concat(symbols)
}

function lettersNumbers() {
    onlyLetters = onlyLetters.concat(numbers)
}

numbersCheck.addEventListener("change", function() {
  if(numbersCheck.checked) {
    lettersNumbers();
  } else {
      onlyLetters = onlyLetters2
  }
});

symbolsCheck.addEventListener("change", function() {
  if(symbolsCheck.checked) {
    lettersSymbols();
  } else {
      onlyLetters = onlyLetters2
  }
});

function randomletter() {
    let random = Math.floor(Math.random() * onlyLetters.length)
    return onlyLetters[random]
}

function averagePassword1() {
    let randomPassword1 = ""
    for(let i = 0; i < passwordLenght; i ++) {
        randomPassword1 += randomletter()
    }
    
    password1.innerText = randomPassword1 
}

function averagePassword2() {
    let randomPassword2 = ""
    for(let i = 0; i < passwordLenght; i ++) {
        randomPassword2 += randomletter()
    }
    password2.innerText = randomPassword2
}