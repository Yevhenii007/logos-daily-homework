function sum(number) {
	let x = number ? number : 0;

	function act(supplement) {
		!supplement ? x : x = x + supplement;
		console.log(x);
	}
	return act
}

let result = sum();

result(1);
result(1);
result();
result(5);
