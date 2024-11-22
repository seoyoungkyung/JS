
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

async function runAsyncAwait(){

    try{

        const user = await getUser(1);
        const posts = await getPosts(user.id);
        const comments = await getCommand(posts[0].id);

        console.log('user : ',user);
        console.log('posts : ',posts);
        console.log('commants : ',comments);

        return user;
    }catch(error){
        console.log(error)

    }
}

console.log("시작...")
runAsyncAwait().then(user => console.log("user : ",user))
console.log("끝...")