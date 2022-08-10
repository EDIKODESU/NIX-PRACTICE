let findStr = (str, wordINstr) =>{
    let newStr = "";
    let indexStartStr = str.indexOf(wordINstr);
    if(str.includes(wordINstr)) {
        str = str.slice(indexStartStr);
        for(let i = 0; i < wordINstr.length; i++){
            newStr += str[i];
        }
        return newStr;
    }
    else return "Підрядок не знайдено";
    
}

let str = "Ми знаємо, що монохромний колір – це градації сірого";
console.log(findStr(str, "хром"));