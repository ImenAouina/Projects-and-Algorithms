//Push Front
//Given an array and an additional value, insert this value at the beginning of the array. 
function PushFront(array, n)
{
    var resultArray = [n];

    for (var i=0 ; i< array.length ; i++)
    {
        resultArray.push(array[i]);
    }
    //console.log(resultArray);
    return(resultArray);
}
console.log(PushFront([1,2,3,4],0));

//Pop Front
//Given an array, remove and return the value at the beginning of the array.  
function PopFront(array)
{
    var resultArray = [];

    for (var i=1 ; i< array.length ; i++)
    {
        resultArray.push(array[i]);
    }
    //console.log(resultArray);
    return resultArray;
}
PopFront([0,1,2,3,4]);

//Insert At

//Given an array, index, and additional value, insert the value into array at given index.
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). 
function InsertAt(array, ind, n)
{
   var array3=[];
   var array1 = [];
   var array2 = [];
   for (var i=0 ; i< ind ; i++)
    {
        array1.push(array[i]);
    }
    //console.log(array1);
    for (var i=ind ; i< array.length ; i++)
    {
        array2.push(array[i]);
    }
    //console.log(array2);
    array3=PushFront(array2, n);
   console.log(array1.concat(array3));
}
InsertAt([100,200,5], 2, 311);

//Bonus: Remove At
//Given an array and an index into array, remove and return the array value at that index. 
function RemoveAt(array, ind)
{
   var array3=[];
   var array1 = [];
   var array2 = [];
   for (var i=0 ; i< ind ; i++)
    {
        array1.push(array[i]);
    }
    //console.log(array1);
    for (var i=ind ; i< array.length ; i++)
    {
        array2.push(array[i]);
    }
    //console.log(array2);
    array3=PopFront(array2);
   console.log(array1.concat(array3));
}
RemoveAt([1000,3,204,77], 1);
RemoveAt([8,20,55,44,98], 3);

//BONUS: Swap Pairs
//Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.
 function SwapPairs(array)
 {
    for (let i = 0; i < array.length - 1; i += 2) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
    }
    return array;
 }
 console.log(SwapPairs([1,2,3,4]));
 console.log(SwapPairs(["John","hello",3]));

 //BONUS: Remove Duplicates
//Given a sorted array, remove duplicate values. 
//Because array elements are already in order, all duplicate values will be grouped together.
function RemoveDuplicates (array)
{
    var array1 = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== array[i + 1]) {
            array1.push(array[i]);
        }
    }
    return array1;
}
console.log(RemoveDuplicates([1,1,2,3,3,3,4]));
