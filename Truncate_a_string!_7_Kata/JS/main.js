function truncateString(str, num) {
    str = str.split(""); // Turn the string to array
// If num parameter is bigger then the length of string don't add "..."
        if (num >= str.length) {
            str = str.join("");
        } 
/* if num is less then 3 then  "..." will not 
count to the length of the string but in case 
the whole string is only 3 letters ignore */
        else if (num <= 3 && num != str.length) { 
            str = str.splice(0,num)
            str = str.join("") + "...";
        }
// all other cases cut the string to length asked include "..." in the count.
        else {
          str = str.splice(0,num-3)
          str = str.join("") + "...";
        }
return str;
  }

  console.log(truncateString("M",3))