const singSong = (bottleCount) => {
  for (let i = bottleCount; i > -1; i--) {
    if (i === 0) {
      console.log(`No more bottles of beer on the wall, no more bottles of beer
        Go to the store and buy some more, ${bottleCount} bottles of beer on the wall`);
      break;
    }
    if (i === 1) {
      console.log(`${i} bottle of beer on the wall, ${i} bottle of beer
    Take one down and pass it around, no more bottles of beer on the wall`);
      continue;
    }
    console.log(`${i} bottles of beer on the wall, ${i} bottles of beer
        Take one down and pass it around, ${
          i - 1
        } bottles of beer on the wall`);
  }
};

singSong(99);
