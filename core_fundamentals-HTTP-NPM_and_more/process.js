/*
console.log(process.argv);
let flag = process.argv.indexOf("--user");
console.log(flag+1);
*/
process.stdout.write("Ask me a question "); // standard output
process.stdin.on("data", function(answer) {
  console.log(answer.toString().trim()); // standard output -> listener
  process.exit();
});
/*
 trim() => Remove whitespace from both sides of a string
*/
