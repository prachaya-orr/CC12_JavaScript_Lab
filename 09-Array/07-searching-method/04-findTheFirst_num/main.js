const num = [7,9,-5,-1,0,3]

let result = num.find(function (item, index, array) {
         if(item === num[0]) {
            return true
         }
      });

      console.log(result)

