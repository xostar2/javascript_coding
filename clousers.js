//  //========CLOUSERS===============
// //--------first exmple--------------

// function x(){
// 	var a=7;
// 	function y(){
// 		console.log(a);
// 	}
// 	//y();
// 	return y;//we can return functions in javascript also
// }

// //let save these funtion into a var
// var z=x();
// //x();
// z();

// //here in this situation the closer works


// function x(){
// 	var a=7;
// 	function y(){
// 		console.log(a);
// 	}
// 	//y();
// 	a=100;
// 	return y;//we can return functions in javascript also
// }

// //let save these funtion into a var
// var z=x();
// //x();
// z();

function z() {
	// body...
	var b=900;
	function x(){
		var a=7;
		function y(){
			console.log(a,b);
		}
		y();
	}
	x();
}
z();
