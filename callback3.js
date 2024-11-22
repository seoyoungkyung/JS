/*
function getUser(userid,callBack){
    setTimeout(()=>{
        const user = { id : userid, name : "홍길동"}
        callBack(user)
    },1000);
};

getUser(1,(user)=>{
    console.log('user: ', user);
})
*/
/*
function getUser(userid,callBack){
    setTimeout(()=>{
        const user = { id : userid, name : "홍길동"}
        callBack(user)
    },1000);
};

function getPosts(userid,callBack){
    setTimeout(()=>{
        const posts=[
            {id: userid,title: 'post 1'},
            {id: userid,title: 'post 2'},

        ]
        callBack(posts);
    },2000)
};

getUser(1,(user)=>{
    console.log('user: ',user)
    getPosts(user.id,(posts)=>{
        console.log('posts: ',posts);
    })
})

function getUser(userid,callBack){
    setTimeout(()=>{
        const user = { id : userid, name : "홍길동"}
        callBack(user)
    },1000);
};
*/

//개인회원
function getUser(userid,callBack){
    setTimeout(()=>{
        const user = { id : userid, name : "홍길동"}
        callBack(user)
    },1000);
};

//홍길동 작성한 글
function getPosts(userid,callBack){
    setTimeout(()=>{
        const posts=[
            {id: userid,title: 'post 1'},
            {id: userid,title: 'post 2'},

        ]
        callBack(posts);
    },2000)
};

//작성글 댓글
function getCommand(postId,callBack){
    setTimeout(()=>{
        const comments=[
            {id:postId , text:"comments 1"},
            {id:postId , text:"comments 2"},
            {id:postId , text:"comments 3"},
        ]
        callBack(comments)
    },3000);
};

getUser(1,(user)=>{
    console.log('user : ', user);
    getPosts(user.id,(posts)=>{
        console.log('posts: ', posts);
        getCommand(posts[0].id,(comments)=>{
            console.log('comments : ', comments);
        })
    })
})
