import SinglePost from "../posts/sections/SinglePost"


const getAllPosts = async()=>{
try {
    let response:Array<SinglePost>= []
     await fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json()).then((json)=>{response=json})
    return response
} catch (error) {
    
}
}

export default getAllPosts

