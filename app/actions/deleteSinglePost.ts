

const deleteSinglePost =async (postId:string)=>{
    try {
        let response = null
        await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
            method:'DELETE'
        }).then((res)=>{response=res})
       return response
    } catch (error) {
        
    }
    }
    
export default deleteSinglePost