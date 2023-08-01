function alphabetPosition(text){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let valueString =""; // Initialize the string as variable

    for (let i=0; i<text.length; i++) {
        const char = text[i].toLowerCase();
        const charValue = alphabet.indexOf(char)+1;

        if (charValue !=0)
        valueString += " " + charValue;
    }

    return valueString;


}

let inputValue = "The sunset sets at twelve o'clock.";
let result = alphabetPosition(inputValue);

console.log(result)



// export default function alphabetPosition(text) {
//     const regex = /[a-z]/g;
//     const letters = "abcdefghijklmnopqrstuvwxyz"
//     const result = text.replace(regex, (match) =>  letters.indexOf(match)+1);
//     console.log(result); 
//     return result;
//   }

//   alphabetPosition("The sunset sets at twelve o' clock.")