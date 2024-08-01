//array to hold the select characters
const notFinalPassword = []

 
 //arrow function to randomly draw characters
    //i must master how arrow functions work 
const addCharacter = async (type, length) => {
    for(let i=0;i<length;i++) {
        notFinalPassword.push(type[Math.floor(Math.random() * type.length)]); 
    }    
}

//function to shuffle characters then set the final password
function sortPassword(passwordLength) {
    let finalPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * notFinalPassword.length);
        finalPassword += notFinalPassword[randomIndex];
        notFinalPassword.splice(randomIndex, 1);
    }
    return finalPassword;
}

export async function passwordHandler() {
    
    const {
        UPPERCASE_LETTERS: allowUppercase,
        LOWERCASE_LETTERS: allowLowercase,
        NUMBERS: allowNumber,
        SPECIAL_CARACTERS: specialCaracters,
        PASSWORD_LENGTH: passwordLength,
        UPPERCASE_LENGTH: upperCaseLength,
        LOWERCASE_LENGTH: lowercaseLength,
        NUMBERS_LENGTH: numbersLength,
        SPECIAL_LENGTH: specialLength
    } = process.env;
    
    const characters = {
        lowercase: [... "abcdefghijklmnopqrstuvwxyz"],
        uppercase: [... "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
        numbers: [... "1234567890"],
        special: [... "!@#$%^&*()-_=+[{]}\|;:'\",<.>/?"],
    }
        
    if(allowLowercase == "true")
        addCharacter(characters.lowercase, lowercaseLength)     
    
    if(allowUppercase == "true")
       addCharacter(characters.uppercase, upperCaseLength)

    if(allowNumber == "true")
        addCharacter(characters.numbers, numbersLength)

    if(specialCaracters == "true")
        addCharacter(characters.special, specialLength)
        
        
    console.log(sortPassword(passwordLength))

}
