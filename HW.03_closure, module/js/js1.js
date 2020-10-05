function outer() {
  let x = 0;

  return function (supplement) {
    supplement ? x += supplement : x;
    return x
  }

}

let res = outer();

console.log(res(3));
console.log(res(4));
console.log(res(222));
console.log(res());
