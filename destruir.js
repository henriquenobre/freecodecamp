// remove valores da array de acordo com os valores dados no argumento
function destroyer(arr) {
    let valsToRemove = Object.values(arguments).slice(1)
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < valsToRemove.length; j++) {
        if (arr[i] === valsToRemove[j]) {
          delete arr[i];
        }
      }
    }
    return arr.filter(item => item !== null);
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));