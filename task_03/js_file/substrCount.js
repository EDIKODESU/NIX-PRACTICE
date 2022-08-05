let substrCount = (input, needle, offset, length) =>{
    let count = 0;
    let strToCompare = "";
    input = input.slice(offset);
    console.log(input);
    for(let i = 0; i < length; i++){
        if(input[i] == needle[0]){
            for(let j = i; j < needle.length + i; j++){
                strToCompare += input[j];
            }
            if(strToCompare == needle) count++;
            strToCompare = "";
        }
    }
    console.log(count);
}

substrCount('Good Gollyi Miss Molly', 'll', 7, 10);