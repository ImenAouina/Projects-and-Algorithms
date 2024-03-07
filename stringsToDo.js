//Remove Blanks
//Create a function that, given a string, returns all of that string’s contents, but without blanks.
function RemoveBlanks(str)
{
    newstr="";
    for(let i=0; i<str.length; i++)
    {
        if(str[i]!=" ")
        {
            newstr+=str[i]
        }
    }
    return newstr;
}
console.log(RemoveBlanks("s ss sss dd ww"));
console.log(RemoveBlanks(" Pl ayTha tF u nkyM usi c "));

//Get Digits
//Create a JavaScript function that given a string, returns the integer made from the string’s digits.
//You are allowed to use isNaN() and Number().
function GetDigits(str)
{
    newstr="";
    for(let i=0; i<str.length; i++)
    {
        if(!isNaN(Number(str[i])))
        {
            newstr+=str[i]
        }
    }
    return newstr;
}
console.log(GetDigits("abc8c0d1ngd0j0!8"));

//Acronyms
//Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). 
//You are allowed to use .split() and .toUpperCase().
function Acronyms(str)
{
    let wordsArray = str.split(" ");
    let newStr = "";
    for (let i = 0; i < wordsArray.length; i++) 
    {
        if (wordsArray[i].length > 0) { 
            newStr += wordsArray[i][0].toUpperCase();
        }
    }
    return newStr;
}
console.log(Acronyms(" there's no free lunch - gotta pay yer way. "));
console.log(Acronyms("Live from New York, it's Saturday Night!"));


//Count Non-Spaces
//Create a function that, given a string, returns the number of non-space characters found in the string. 
function CountNonSpaces(str)
{
    let newstr="";
    for(let i=0; i<str.length; i++)
    {
        if(str[i] != " ")
        {
            newstr+=str[i]
        }
    }
    return newstr.length;
}
console.log(CountNonSpaces("Honey pie, you are driving me crazy"));
console.log(CountNonSpaces("Hello world !"));

//Remove Shorter Strings
//Create a function that, given an array of strings and a numerical value, 
//returns an array that only contains strings longer than or equal to the given value.

function RemoveShorterStrings(array, n)
{
    let newArray=[];;
    for(let i=0; i<array.length; i++)
    {
        if(array[i].length >= n)
        {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(RemoveShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
console.log(RemoveShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));