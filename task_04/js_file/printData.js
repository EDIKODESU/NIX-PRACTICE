let printData = (str, re) =>{
   let obj = "";
   let strData = "";
   let ArrOfStr = [];
   let leapYear = false;
   if(re.test(str)){
      obj = str.match((/\S+-\d+-\S+/));
      strData = obj[0];
      if(strData[1] != "-" && strData[2] != '-') return "date must not be characters or greater than 31";
      if(isNaN(Number(strData.slice(-1)))) return "date must not be characters";
      ArrOfStr = strData.split("-");
      for(let i = 0; i < ArrOfStr.length; i++){ ArrOfStr[i] = Number(ArrOfStr[i]);}
      if(ArrOfStr[2] % 4 == 0) leapYear = true;
      if(ArrOfStr[1] == 0 || ArrOfStr[1] >= 13) return "no 13 or 0 months";
      if(ArrOfStr[1] % 2 == 0 && ArrOfStr[1] != 2) {
         if(ArrOfStr[0] == 0 || ArrOfStr[0] > 30) return "day cannot be more than 30 and less than 0";
      }
      if(ArrOfStr[1] % 2 == 0 && ArrOfStr[1] == 2) {
         if(leapYear) {
            if(ArrOfStr[0] == 0 || ArrOfStr[0] > 29) return "leap year 29 or day must not be 0";
         }
         else {
            if(ArrOfStr[0] == 0 || ArrOfStr[0] > 28) return "leap year 28 or day must not be 0";
         }
      }
      if(ArrOfStr[1] % 2 != 0) {
         if(ArrOfStr[0] == 0 || ArrOfStr[0] > 31) return "day cannot be more than 31 and less than 0";
      }
      strData = "";
      for(let i = 0; i < ArrOfStr.length; i++){ 
         if(ArrOfStr[ArrOfStr.length - 1] == 0 && i + 1 == ArrOfStr.length) strData += "000";
         if(ArrOfStr[i] < 10 && i + 1 != ArrOfStr.length) strData += "0";
         strData += ArrOfStr[i];
         if(i + 1 != ArrOfStr.length) strData += "-";
      }
      return strData;
   }
   else return "date pattern not found";
}

let string1 = "30-4-2023";
let string2 = "25-7-2021)?";
let string3 = "29-2-2024";
let string4 = "14-32-1979";
let string5 = "pop22-12-1239";
let string6 = "31-9-0000";
let string7 = "31-9pop-0000";

const regexp = /(\d{2}|\d{1})-(\d{2}|\d{1})-\d{4}/; 

console.log(printData(string1, regexp));
console.log(printData(string2, regexp));
console.log(printData(string3, regexp));
console.log(printData(string4, regexp));
console.log(printData(string5, regexp));
console.log(printData(string6, regexp));
console.log(printData(string7, regexp));
