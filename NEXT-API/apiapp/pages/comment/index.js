import {useState} from 'react';

function CommentPage(){
    const[comment,setComment] = useState([]);
    const[input,setInput] = useState([]);

    const fetchComments = async ()=>{
        const response = await fetch('/api/comments')
        const data = response.json();
        setComment(data)
    }

    const submitComment= async ()=>{
        const response = await fetch('/api/comments',{
            method:'POST',
           body: JSON.stringify({comment}),
           headers: {
            'Content-Type': 'application/json'
           }
        })
        const data = await response.json();
        console.log(data)
    }

    const deleteComment= async (commentId)=>{
        const response = await fetch('/api/comments/${commentId}',{
            method:'DELETE',
        })
        const data = await response.json();
        console.log(data);
        fetchComments();
    }


    return(
        <>
        <input type='text' value={input} onChange={(e)=> setInput(e.target.value)} />
        <button onClick={submitComment}>Submit Comment</button>
        <button onClick={fetchComments}>Load comments</button>
        {
            comment.map(item=>{
                return(
                    <div key={item.id}>
                        {item.id} {item.body}
                        <button onClick={()=> deleteComment()} >Delete Comment</button>
                    </div>
                )
            })
        }
        </>
    )

}

export default CommentPage