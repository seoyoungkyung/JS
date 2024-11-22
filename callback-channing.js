/*
const fetchDate = new Promise((resolve,reject)=>{
    
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
   
    .then(response=>{
        console.log(response)
        resolve(response.json())
   })
   
   .catch(error =>reject(error)) 

});

fetchDate
    .then(data=>{
        console.log("data= ",data)
    })
    
    .catch((err)=>{
        console.log(err);
    })
    
    .finally(()=>console.log("완료!!"))
*/

fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response =>{
        console.log(response)
        return response.json()
    })
    .then(data =>{
        console.log("data : ",data);
    })

    .catch(error=>{
        console.log("error : ",error)
    })