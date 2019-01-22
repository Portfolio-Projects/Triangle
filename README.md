# Triangle
Write a program that will determine the type of a triangle. It should take the lengths of the triangle's three sides as input, and return whether the triangle is equilateral, isosceles or scalene. Solution completed using Javascript.


### HTML CODE

```HTML
  <body>
      <div class="container">

  <h1>Triangles</h1>

           <h2>Figure out what kind of triangle your measurements are below.</h2>

          <form id="triangle-entry">
              <div class="form-group">
                  <label for="side1">First side</label>
                  <input id="side1" type="number">
              </div>
              <div class="form-group">
                  <label for="side2">Second side</label>
                  <input id="side2" type="number">
              </div>
              <div class="form-group">
                  <label for="side3">Third side</label>
                  <input id="side3" type="number">
              </div>
              <button type="submit" class="btn btn-success btn-lg">Submit</button>
          </form>
          <div id="result">
              <p>That type of triangle is <span class="tri"></span>.</p>
          </div>
      </div>
  </body>

```

### Javascript Code - ECMASCRIPT 6

```Javascript
let triangle = (side1, side2, side3) => {

    if ((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2)) { 
	
		//check if it is a triangle
        if ((side1 == side2) && (side2 == side3) && (side1 == side3)) {
            return "equilateral";
        } else if ((side1 == side2) || (side2 == side3) || (side1 == side3)) {
            return "isosceles";
        } else { //if neither of the above and a triangle, it is scalene
            return "scalene";
        }
    } else { //sides don't form triangle
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

        document.querySelector(".tri").innerText = result;


    });
    
    
	
	


```


### How to check: 
Check the Solution online here: https://codepen.io/anon/pen/qgEWdd
