function simpleArraySum(ar) {
  let sum = 0;
  for (const number of ar) {
    sum += number;
  }
  return sum;
}

let ar = [1, 2, 3, 4, 10, 11];
console.log(simpleArraySum(ar));
