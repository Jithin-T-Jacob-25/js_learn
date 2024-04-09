// Two ways of filtering array

let arr = [1,2,3,4,5];

// Method 1
let newArr = console.log(arr.filter((a) => a%2==0).map((a)=> a*2));

// Method 2
let newArr2 = [];
for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2 == 0){
     newArr2.push(arr[i] * 2);
    }
}
console.log(newArr2);