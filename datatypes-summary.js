// Primitive Datatypes
/* 
  These are call by value
  There are 7 types of Primitive Datatypes
    1. String
    2. Number
    3. Boolean
    4. Null
    5. Undefined
    6. Symbol -> to make values unique
    7. BigInt
*/

// Non- Primitive Datatypes (Reference)
/*
  1. Array
  2. Objects
  3. Functions
*/

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);