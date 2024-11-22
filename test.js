function func1(){
    console.log("1. --------------------");
    
}

function func2(num){
    console.log("2. func2 : ",num)
}

function func3(){
    console.log("3. func3................");
    return "func3";
}

const 표현식함수 = function func4(){
    console.log("4. func4...............");
}

const 표현식함수2 = function func5(num){
    console.log("5. func5...............",num);
}

const 익명함수 = function(){
    console.log("6. 익명함수...........");
}
const 익명함수2 = function(num){
    console.log("7. 익명함수2...........");
}
const 익명함수3 = function(num){
    console.log("8. 익명함수3...........");
    return num*num;
}
const 화살표함수 = () =>console.log("9.화살표함수........")
const 화살표함수2 = (num) =>console.log("10.화살표함수........",num)
const 화살표함수3 = (num) =>{
    console.log("11.화살표함수........")
    return num*num;
}
func1()
func2(20,"kor")
const result = func3()
console.log(result)

표현식함수()
표현식함수2(100)
익명함수()
익명함수2(100)
const result2 = 익명함수3(100)
console.log(result2)

화살표함수()
화살표함수2(100)
const result3 = 화살표함수3(100)
console.log(result3)

console.log("-----------------------------------------")
function aaa(){
    console.log("12. 일반함수 호이스트")
}

aaa();

// bbb() 호이스트 불가
const bbb = function(){
    console.log("13. ..표현식함수, 익명함수, 화살표함수 호이스트 불가")
}
