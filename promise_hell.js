
function getUser(userid){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try{
                const user = { id : userid, name : "홍길동"}
                resolve(user)
            }catch(error){
                reject(error)
            } 
        },1000);
    })
};


function getPosts(userid){

    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            try{
                const posts=[
                    {id: userid,title: 'post 1'},
                    {id: userid,title: 'post 2'},
        
                ]
                resolve(posts);
            }catch(error){
                reject(error)
            }
        },2000);
    
    })
};


function getCommand(postId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const comments=[
                {id:postId , text:"comments 1"},
                {id:postId , text:"comments 2"},
                {id:postId , text:"comments 3"},
            ]
            resolve(comments);     
        },2000);
   
    })
};

getUser(1)
    .then((user)=>{
        console.log('user : ',user);
        return getPosts(user.id);
    })
    .then((posts)=>{
        console.log('posts : ',posts)
        return getCommand(posts[0].id);
    })
    .then((comments)=>{
        console.log("comments: ",comments);
    })
    .catch((error)=>
        console.log("error : ",error)
    )
    .finally(()=>console.log("end!"))
    