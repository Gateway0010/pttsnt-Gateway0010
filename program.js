// Add new functions, variables here
function tsnt(a){
  for (let i=2;i<=a;i++){
    while (a%i ==0){
      console.log(i+" "+(a/=i));
    }
  }
  return ;
}
function main(input) {
  // Your code goes here
  let inp = input.split(" ")
  let a = parseInt(inp[0]);
  tsnt(a);
  // Using console.log to answer the question
}
module.exports = main;
