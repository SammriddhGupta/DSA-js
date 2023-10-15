// sets are similar to arrays 
// maps similar to objects

const nameSet = new Set(['John', 'Jane', 'Joe', 'John']);

// even with 2 johns, only 1 is printed, set elements are unique
//console.log(nameSet);

// add to sets 
nameSet.add('Jack');
nameSet.add('Jill');

// check values 
console.log(nameSet.has('Jack'));
console.log(nameSet.has('Brad'));

// get size
console.log(nameSet.size);

// get values
console.log(nameSet.values());

//console.log(nameSet);

for (const name of nameSet) {
    console.log(name);
}

// convert to array
const nameArr = [...nameSet];
console.log(nameArr);

nameSet.clear()

console.log(nameSet);