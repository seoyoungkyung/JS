/*
function teskSyncFunc(callBack){
    console.log("첫번째 작업")

    for(let i=0;i<10000;i++)
        console.log("두번째 작업")
    callBack();
}

teskSyncFunc( ()=>console.log("콜백함수 실행"));
*/

function taskAsyncFunc(callBack){
    console.log("start");

    setTimeout( () => {
        console.log("첫번째 작업");
        console.log("두번째 작업");
        callBack();
    },2000);
    console.log("end");
}

taskAsyncFunc( () => console.log("콜백함수 실행"))