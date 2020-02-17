function Sum (a, b) {
  let result = undefined
  if(typeof a == "number" && typeof b == "number") {
  result = a + b
} 
return result;
}


function AddList(arr) {
  let result = undefined;
  if(Array.isArray(arr) && arr.length > 0) {
    result = 0;
  for(var i= 0; i < arr.length; i++) {
    if(typeof arr[i] != "number") {
      result = undefined;
      break;
    }
    result = result + arr[i];
  }
}
  return result;
}

/*function DivideBy(arr, arr) {
  let result = 0;
 
}*/
//console.log(Sum(2,3)==5);
//console.log(Sum(-10,-20)==30);

export { Sum, AddList };
//export { DivideBy };