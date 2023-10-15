const wordFrequencyCounter = require('./word-frequency-counter');

const result = wordFrequencyCounter(
  'The quick brown fox jumps over the lazy dog.'
);

const result2 = wordFrequencyCounter(
  'This seems to be a good example of using maps, but hmm its difficult to come up with sentences having multiple repeated words is that a good thing I think it is haha.'
);

console.log(result);
console.log(result2);