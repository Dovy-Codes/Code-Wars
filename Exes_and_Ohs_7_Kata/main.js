function XO(str) {
    str = str.toLowerCase();
    let xCount = 0;
    let oCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "x") {
            xCount++;
        }
        else if (str[i] == "o") {
            oCount++;
        }
    }
    if (xCount == oCount) {
        return true;
    }
    else {
        return false;
    }
  };