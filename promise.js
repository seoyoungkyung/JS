/*
Promiss : 비동기 작업을 처리하는 객체
resolve : 정상적인 결과값 반환
reject : 비정상적인 결과값 반환
*/

const myPromiss = new Promise((resolve,reject)=>{
    //비동기 작업처리

    setTimeout(()=>{
        const text = prompt("'hello'입력하면 true값 반환 ");
        if(text === 'hello'){
            resolve('안녕')
        }else{
            reject('error message');
        }
    },2000);
});

myPromiss
    .then((result)=>{
        console.log(result);
        return `hello 단어 한국어는 ${result}`;
    })
    .then((result)=>{
        console.log("result : ",result)
    })
    .catch((err)=>{
        console.log("err: ",err)
    })
    .finally(()=>{
        console.log("정상이든 비정상적이든 무조건 실행 구문")
    })