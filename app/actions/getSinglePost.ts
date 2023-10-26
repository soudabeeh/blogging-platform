

const getSinglePost =async (postId:string)=>{
try {
    let response = null
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res)=>res.json()).then((json)=>{response=json})
   return response
} catch (error) {
    
}
}

export default getSinglePost