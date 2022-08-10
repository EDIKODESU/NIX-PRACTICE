let strPad = (input, fullLen, fillStr, fillType = "FILL_RIGHT") =>{
    let Newstr = "";
    let indexSymbols = 0;
    let lengthInput = input.length;
    if(fullLen < fillStr.length + lengthInput) return "Помилка! Потрібна більша должина усього рядка";
    for(let i = 0; i < (fullLen - lengthInput); i++){
        if(indexSymbols >= fillStr.length) indexSymbols = 0;
        Newstr += fillStr[indexSymbols];
        indexSymbols++;
    }
    if(fillType == "FILL_LEFT"){
        Newstr += input;
        return Newstr;
    }
    else if(fillType == "FILL_RIGHT"){
        input += Newstr;
        return input;
    }
    else if(fillType == "FILL_BOTH"){
        let Bothstr = "";
        for(let i = 0; i < Newstr.length; i++){
            if(i == Math.round(Newstr.length/2) || Newstr.length == 1){
                Bothstr += input;
            }
            Bothstr += Newstr[i];
        }
        return Bothstr;
    }
}

console.log(strPad('star', 10, '_*_')); // star_*__*_
console.log(strPad('star', 8, '_*_', 'FILL_LEFT' )); // _*__star
console.log(strPad('star', 8, '*', 'FILL_BOTH')); // **star**
