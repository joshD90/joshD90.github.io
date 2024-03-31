//have a variable number of bottles based on bottlecount
const singSong = (bottleCount) => {
  //start from the bottle count and work backwards so we dont have to invert the count
  for (let i = bottleCount; i > -1; i--) {
    if (i === 0) {
      console.log(`No more bottles of beer on the wall, no more bottles of beer
        Go to the store and buy some more, ${bottleCount} bottles of beer on the wall`);
      //exit the loop altogether if we are on the last one - we short circuit the other if statements in the lexical scope
      break;
    }
    //the wording changes slightly for the second last iteration
    if (i === 1) {
      console.log(`${i} bottle of beer on the wall, ${i} bottle of beer
    Take one down and pass it around, no more bottles of beer on the wall`);
      //continue to skip the last section of the lexical scope but keep the iterations going
      continue;
    }
    //business as usual (create our string through template literals for ease of readability)
    console.log(`${i} bottles of beer on the wall, ${i} bottles of beer
        Take one down and pass it around, ${
          i - 1
        } bottles of beer on the wall`);
  }
};

//call our function

singSong(99);
