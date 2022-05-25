const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);




// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// How long does it take to double every number in a given 
// array? 
// For the extra large array timing: insert function takes 1.3422601 S. For the append function it takes 5.1374 ms.
// largeArray: insert = 11.8547 ms. append = 727.7 us.
// mediumArray: insert = 226.6 us. append = 175.1 us
// smallArray: insert = 61.2 us. append = 119.9 us.
// tinyArray: insert = 72 us. append = 191.1 us.

// Paragraph
// For the extraLargeArry, largeArray and the mediumArray the append function is more efficiant. 
// For the smallArray and tinyArray the insert function seems to be more efficient.
// As the arrays get larger the append fucntions is much more efficient than the insert function. .push is more efficient than .unshift