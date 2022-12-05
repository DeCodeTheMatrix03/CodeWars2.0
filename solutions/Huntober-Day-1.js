/*
Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.

'0' <-> 'O'      '5' <-> 'S'
'1' <-> 'I'      '6' <-> 'G'
'2' <-> 'Z'      '7' <-> 'L'
'3' <-> 'E'      '8' <-> 'B'
'4' <-> 'h'      '9' <-> 'q'

*/

function fixLetterAndNumbers(str){
    return str.replace(/0/g,"O").replace(/1/g,"I").replace(/2/g,"Z").replace(/3/g,"E").replace(/4/g,"h").replace(/5/g,"S").replace(/6/g,"G").replace(/7/g,"L").replace(/8/g,"B").replace(/9/g,"q").replace(/h/g,"4").replace(/q/g,"9").replace(/B/g,"8");
}

console.log(fixLetterAndNumbers("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."))
