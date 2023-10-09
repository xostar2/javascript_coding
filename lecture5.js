/* Lecture5: ************************
READING AND WRITING TO A FILE

************************************
*/
const readline=require('readline');

const fs=require('fs');

let txtIn=fs.readFileSync('./input.txt','utf-8');
console.log(txtIn);

let content=`Data read from input.txt:${txtIn} \n Date created ${new Date()}`;

//fs.writeFileSync('./input.txt',``)

fs.writeFileSync('./input.txt',content)