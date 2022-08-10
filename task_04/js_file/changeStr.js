let changeStr = (str, re)=>{
    return str.replace(re, '$2 $1');
}

const regExp = /(\w+),\s(\w+)/g;
let names = "Lennon, John\nMcCartney, Paul\nHarrison, George\nStar, Ringo";
console.log(changeStr(names, regExp));
