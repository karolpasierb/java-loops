function drawTree(rows) {
  for (var i = 1 ; i <= rows ; i++) {
    var star="";
	for (var j = 0 ; j < i ; j++){
      star += "*";
	}
	console.log(star);
  }
}