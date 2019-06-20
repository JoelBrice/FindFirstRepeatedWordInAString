
function firstRepeatedWord(s){
    var char = s.split(" ");
    var repeatedChar = false;
    var firstRepeated;
    var repeatedWords = [];
    // console.log(char.length)

       for( let i =0; i < char.length; i++){
        if(char[i]=char[i+1]){
            firstRepeated = char[i+1];
            repeatedChar = true;[]
        }
    }
    if(repeatedChar){
        console.log(firstRepeated);
        repeatedWords.push(firstRepeated);
        console.log(repeatedWords);
    }
}
var result = firstRepeatedWord("Hi Hey ha Hi Hey");
var result2 = firstRepeatedWord("Hmmm OK Sure Wow ok alright ok, that's me, Sure, Hmmm");
