const [x1, y1, x2, y2] = readline().split(" ").map(n => +n);
if (x1 == x2){
	console.log("Vertical");
}else if (y1 == y2){
	console.log("Horizontal");
}else {
	console.log("Try again");
}