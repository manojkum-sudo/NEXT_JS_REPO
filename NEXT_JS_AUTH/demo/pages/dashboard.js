import { getSession ,signIn} from 'next-auth/client'
import { useState , useEffect} from 'react';




function Dashboard(){
    const[loading,setLoading] = useState(true);

    useEffect(()=>{
        const securePage = async(()=>{
            const session = getSession()
            if(!session){
                signIn()
            }else{
                setLoading(false)
            }
        }
        )
        securePage()
    
    },[])

    if(loading){
        return <h2>Loading...</h2>
    }



    return (
        <>
        <h1>This is Dashboard Page</h1>
        </>
    )
}

export default Dashboard