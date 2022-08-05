let true_str = "isu([syvstc]ts(crs))cs";
let false_str_one = "isu[syv(stc]ts(crs))cs";
let false_str_two = "isu([syvstc]ts(crs)cs";

let testString = (str) =>{
    let count = 0;
    let strBrecket = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] == "(" || str[i] == "[" || str[i] == ")" || str[i] == "]"){
            strBrecket += str[i];
            if(count > 0){
                if((strBrecket[count - 1] == "(" && strBrecket[count] == "]") || (strBrecket[count - 1] == "[" && strBrecket[count] == ")")){
                    console.log("parenthesis problems");
                    strBrecket = "";
                    return false;
                }
            }
            count++;
        }
    }
    if(strBrecket != ""){
        let count_brecket = 0;
        for(let i = 0; i < strBrecket.length; i++){
            if(strBrecket[i] == "(" || strBrecket[i] == "["){
                count_brecket++;
            }
            else if(strBrecket[i] == ")" || strBrecket[i] == "]"){
                if(count_brecket == 0){
                    console.log("parenthesis problems");
                    return false;
                }
                else{
                    count_brecket--;
                }
            }
            if(i + 1 == strBrecket.length){
                if(count_brecket == 0){
                    console.log("no mistakes"); 
                    return true;
                }
                else{
                    console.log("parenthesis problems"); 
                    return false;
                }
            }
        }
    }
}

testString(true_str);
testString(false_str_one);
testString(false_str_two);