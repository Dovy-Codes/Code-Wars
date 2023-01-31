function deleteNth(arr,n){
    function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)}
    let arrayWithoutDup = removeDuplicates(arr);
    for (let i = 0; i < arrayWithoutDup.length; i++){
      let checkNum = arrayWithoutDup[i];
      let itemCount = 0;
      for(let j = 0; j < arr.length; j++){
         if(checkNum === arr[j]){
             if(n <= itemCount) {
                 arr.splice(j,1);
                 j--;
             }
             else{ itemCount++; }
     } 
    }
   }
   return arr
  }