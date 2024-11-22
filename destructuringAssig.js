/*
let arr = [1,2,3]

let one = arr[0]
let two = arr[1]
let three = arr[2]

console.log(one,two,three)

*/

//구조 분할 할당

let arr = [1,2,3];
let [one,two,three] = arr;
console.log(one,two,three)

let person={
    name:"홍길동",
    age : 25,
    address :"경기도 수원시"
}

let{name,age,address} = person
console.log(name,age,address)
console.log("------------------")

//function func(person)
function func({name,age,address}){
    //console.log(person.name,person.age,person.address)
    console.log(name,age,address)
}
func(person)

console.log("--------스프레드----------")
//스프레드 연산자

let arrA=[1,2,3]
let arrB=[...arrA,4,5,6]

console.log(arrA)
console.log(arrB)

function func2(a,b,c){
    console.log(a,b,c)
}

func2(...arr)

console.log("---------rest---------")
//rest 매개변수
function func3(...rest){
    console.log(rest)
}
func3(1,2,3)

function func4(param,...rest){
    console.log(param)
    console.log(rest)
}
func4(1,2,3,4,5,6);

console.log("---------filter---------")
let arr2 = [
    {name : "까미", age : 10},
    {name : "로이", age : 13},
    {name : "강산", age : 5},
    {name : "뽀양", age : 8},
]

let filterArray = arr2.filter(
    (item)=>item.age>8
)
console.log(filterArray)

console.log("---------map---------")
let arr3 = [
    {name : "까미", age : 10},
    {name : "로이", age : 13},
    {name : "강산", age : 5},
    {name : "뽀양", age : 8},
]

let newArr = arr3.map(
    (item)=>item.age
);
console.log(newArr)
