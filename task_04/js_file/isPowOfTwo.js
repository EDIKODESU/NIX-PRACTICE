let isPowOfTwo = (numb) =>{
    return (numb > 0 && (numb & (numb - 1))) == 0;
}

console.log(isPowOfTwo(16));
console.log(isPowOfTwo(14));
console.log(isPowOfTwo(64));