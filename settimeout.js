function x(){
	var i=1;
//this function form a closure take this inner function and store it to some other place and after the time 
//and then timer expire then it take the function and callstack
	setTimeout(function(){
		console.log(i);
	},1000);

	console.log("Namaste javascript");
}

x();

//print 1 to 5 avery second
function y(){
	for(let i=1;i<=10;i++){
		setTimeout(function(){
			console.log(i);
		},i*1000);
	}
	console.log("wrong answer here");
}

y();

//=====================


//use without let var

function c(){
  
  for(var i=0;i<=10;i++){

  	function close(x){
  		setTimeout(function(){
  				console.log(x);
  		},3000);
  	}
  	close(i);
  }

}

c();


















