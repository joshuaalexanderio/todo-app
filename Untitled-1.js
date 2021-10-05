// DEFINE YOUR FUNCTION BELOW:
function capitalize(string) {
  let array;
  array = string.split();
  array[0] = array[0].toUpperCase;
  string = array.join();
  return string;
}

let word = "the dog";
word = capitalize(word);
console.log("word");
