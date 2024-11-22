const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
"#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const passwordEl1 = document.getElementById("pass-el1")
const passwordEl2 = document.getElementById("pass-el2")

function generatePassword() {
    const length = 15,
    password1 = [],
    password2 = []
    for (let i = 0; i < length; i++) {
        const randomIndex1 = Math.floor(Math.random() * characters.length)
        const randomIndex2 = Math.floor(Math.random() * characters.length)
        password1.push(characters[randomIndex1])
        password2.push(characters[randomIndex2])
    }
    passwordEl1.textContent = password1.join("")
    passwordEl2.textContent = password2.join("")
}

