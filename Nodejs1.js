//Readline in javascript and node js
//How to read input from the terminal
const readline= require('readline');
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("please enter your name:",(name)=>{
    console.log("you entered :"+name);
    r1.close(); //close event
});

//Listener of close event
r1.on('close',()=>{
    console.log("Interface closeed");
    process.exit(0);
})
