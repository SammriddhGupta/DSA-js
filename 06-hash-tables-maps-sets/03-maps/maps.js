const nameMap = new Map([
    [1, 'John'],
    [2, 'Jack'],
    [3,'Jill'],
]);

const myFunc = () => { };
const myObj = {};

const map2 = new Map([
    ['name', 'John'],
    [1, 'number one'],
    [true, 'yep deffo true'],
    [null, 'null'],
    [myFunc, 'my function'],
    [myObj, 'my object'],
    [2, 'Jack'],
    [3,'Jill'],
]);

// get values
console.log(nameMap.get(1));
console.log(map2.get(myFunc));

// set values
nameMap.set(4, 'Mike');
nameMap.set(5, 'Sarah');
console.log(nameMap);

// check values
console.log(nameMap.has(1));
console.log(nameMap.has(11));

// remove values
nameMap.delete(1)
console.log(nameMap.has(1));

// get size
console.log(nameMap.size);

// iterating over a map
for (let [key,value] of nameMap) {
    console.log(key, value);
}

nameMap.forEach((value, key) => console.log(key, value));

// get keys only 
console.log(nameMap.keys());

// get values only
console.log(nameMap.values());

// clear entire map 
nameMap.clear();

console.log(nameMap.size);