
function digitalRoot(n) {
    let sum = 0;
    let holder = 0; 
    // If length of numbers is more then one it will keep calling dRoot
    while(n.toString().length > 1) {
        n = dRoot(n);
    }
    // This function splits the number into individual numbers and adds them
    function dRoot(number) {
        number = number.toString().split("");
    for(let i = 0; number.length > i; i++)   {
        sum =  sum + parseFloat(number[i])
    }
    // To be able to reset sum I had to pass its value to holder so that I could return it
    holder = sum;
        sum = 0;
    return holder
    }
    return n
}