var n = 6;
var isPrime = true;
for (var num = 2; num < n; num++) {
  if (n % num === 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log("Yes,It is a Prime Number");
} else {
  console.log("No, It is not a Prime Number");
}
