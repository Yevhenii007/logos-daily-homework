function sum(number) {
  let x = number ? number : 0;

  function act(supplement) {
    if (typeof x != "number" && typeof x == NaN) {
      "Sorry, you wrote wrong value"
    }
    else {
      supplement ? x = x + supplement : x;
    }
    return x
  }
  return act
}

let result = sum();

console.log(result(1));
console.log(result(1));
console.log(result());
console.log(result(5));
