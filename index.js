// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(typeof a) 
console.log(typeof b)

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (let i = 0; i < a.length; i++) {
        a[i] *= 2;
    }

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors[0]+" "+colors[1]+" "+colors[2]+" "+colors[3])
console.log(colors[0]+"+"+colors[1]+"+"+colors[2]+"+"+colors[3])
console.log(colors[0]+","+colors[1]+","+colors[2]+","+colors[3])


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(a.sort(function(a,b){return b-a}))

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
let obj = {},max =0,maxEle;
    for(let i=0;i<a.length;i++){
        let val = a[i]
        obj[val]===undefined?obj[val] = 1:obj[val]++;
        if(obj[val]>max){
            max = obj[val]
            maxEle = val
        }
    }
console.log(maxEle)
