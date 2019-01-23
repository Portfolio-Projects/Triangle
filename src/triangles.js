let triangle = (side1, side2, side3) => {

	if ((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2)) { 

	//check if it is a triangle
			if ((side1 === side2) && (side2 === side3) && (side1 === side3)) {
					return "equilateral";
				} else if ((side1 === side2) || (side2 === side3) || (side1 === side3)) {
						return "isosceles"; }
				else { //if neither of the above and a triangle, it is scalene
						return "scalene";
				}
	}
	else { //sides don't form triangle
			return "not a triangle";
	}
}

document.querySelector('form#triangle-entry').addEventListener('submit', event => {
			event.preventDefault();
			
			let side1 = parseInt(document.querySelector("input#side1").value);
			let side2 = parseInt(document.querySelector("input#side2").value);
			let side3 = parseInt(document.querySelector("input#side3").value);
			console.log(side1);


			let result = triangle(side1, side2, side3);

			document.querySelector(".tri").innerText = `That type of triangle is ${result}.`;

	});