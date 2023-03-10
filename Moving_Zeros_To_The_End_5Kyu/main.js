function moveZeros(arr) {
    let noZeros = arr.filter(item => item !== 0);
    let Zeros = arr.filter(item => item === 0);
    return arr = [...noZeros, ...Zeros];
}

  console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));