const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
 
const postContainer=document.querySelector(".post-container")



function renderPosts(){
    const html =  posts.map((post)=>{
       return `
        <section class="poster">
            <div class="container flex">
                <div class="pfp-container">
                    <img class="van-gogh" src=${post.avatar} alt="vangogh avatar">
                </div>
    
                <div class="user-container">
                    <div class="user-name">${post.name}</div>
                    <div class="user-location">${post.location}</div>
                </div>                
            </div>
        </section>
    
        <section class="post">
            <img src=${post.post} alt="van-gogh">
        </section>
    
    
        <section class="post-info">
            <div class="container">  
                <div class="icons flex">
                    <div class="icon">
                        <img class="btn" src="images/icon-heart.png" alt="heart">
                    </div>
    
                    <div class="icon">
                        <img src="images/icon-comment.png" alt="comment">
                    </div>
    
                    <div class="icon">
                        <img src="images/icon-dm.png" alt="dm">
                    </div>
                </div>
                <div class="likes">${post.likes} likes</div>
            </div>
        </section>
    
        <section class="comments">
            <div class="container flex">
                <div class="comment-name">${post.username}</div>
                <div class="comment-content">${post.comment}</div>
            </div> 
        </section>
    `
    }).join("")
    postContainer.innerHTML=html
}

renderPosts()

// const btn=document.querySelector(".btn")


// btn.addEventListener("click",()=>{
//     posts.map((post)=>{
//         post.likes+=1
//         console.log(post.likes)
//     })
//     renderPosts()
// })
