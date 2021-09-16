
const loadData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => allData(data))
}

const allData = Data =>{
    const dataContainer = document.getElementById('dataContainer')
    for(const singleData of Data){
        const li = document.createElement('li')
        li.classList.add('list-group-item')
        li.innerHTML=`
            Name:${singleData.name}
        `
        dataContainer.appendChild(li)
    }
}
// all post 
const loadPost = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (response => response.json())
    .then (data => postData(data))
}

const postData = post =>{
    console.log(post)
    const dataContainer = document.getElementById('postContainer')
    for(const singlePost of post){
        const li = document.createElement('li')
        li.classList.add('list-group-item')
        li.innerHTML=`
            Name:${singlePost.title}
        `
        dataContainer.appendChild(li)
    }
}

const loadComment = ()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then (response => response.json())
    .then (data => postComment(data))
}
const postComment = (Comment)=>{
    const dataContainer = document.getElementById('commentContainer')
    Comment.forEach (singleComment => {
        const li = document.createElement('li')
        li.classList.add('list-group-item')
        li.innerHTML=`
        body: ${singleComment.body}
        `
        dataContainer.appendChild(li)
    })
}