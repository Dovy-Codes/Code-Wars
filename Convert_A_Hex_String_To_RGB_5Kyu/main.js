function hexStringToRGB(hexString) {
    hexString = hexString.toUpperCase().slice(1);
    let r = parseInt(hexString.slice(0, 2), 16);
    let g = parseInt(hexString.slice(2, 4), 16);
    let b = parseInt(hexString.slice(4, 6), 16);
    return {r : r, g : g, b : b}
}
console.log(hexStringToRGB("#ff9933"))

// hexStringToRGB("#FF9933"), {r:255, g:153, b:51};