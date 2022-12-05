/*
<<<<<<< HEAD
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
=======
>>>>>>> d380a0358bb352dca95792a869a0638ce7eaba1b

*/

function noBoringZeros(n) {
    return +`${n}`.replace(/0*$/, "");
  }
