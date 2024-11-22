const promise = new Promise(
    function (resolve,reject) {
        setTimeout( ()=>{
            console.log("Hello")
        },5000);
    }
);

const promise2 = new Promise(
   (resolve,reject)=>{
        setTimeout(()=>{
            resolve("성공")
        },1000);
    }
);

promise2 
    .then((result)=>console.log("result :",result))