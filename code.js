// Sum zero function
let numsArray = [4, 8, 21, 24, 32, 33, 44, -5, 5]

let value = false;
for (let i = 0; i < numsArray.length; i++) {
  for (let j = 0; j < numsArray.length; j++) {
    if (i !== j) {
      if (numsArray[i] + numsArray[j] === 0) {
        value = true;
      } 
    }
  }
}

console.log(value)
// runtime is O(1)


// Unique characters function
function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }
hasUniqueChars("Monday");
// runtime is O(1)


// Pangram Sentence
function isItPangram(str) {
    let regex = /([a-z])(?!.*\1)/gi;
    return (str.match(regex)).length === 26;
}

console.log(isItPangram("the quick brown fox jumps over the lazy dog."))
// runtime is O(1)


// Longest word
function findLongestWord(str) {
    let strSplit = str.split(" ");
    let longestWord = 0;
    for(let i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longestWord)
        longestWord = strSplit[i].length;
}
    return longestWord;
}
findLongestWord("the quick brown fox jumps over the lazy dog")
// runtime is O(n)
