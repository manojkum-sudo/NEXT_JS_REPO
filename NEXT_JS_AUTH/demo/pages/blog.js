import {getSession,useSession} from 'next-auth/client'

function Blog({data}){
    const[session] = useSession()
    return (
        <>
        <h1>This is Blog Page</h1>
        </>
    )
}

export default Blog

export async function getServerSideProps(context){
    const session = await getSession(context)

    if(!session){
        return{
            redirect:{
                destination: `/api/auth/signin?callbackurl=https://localhost:3000/blog`,
                permanent:false,
            }
        }
    }



    return{
        props:{
            session,
            data:session ? 'List of 100 personaliszed Blog' : 'List of free Blogs',
        }
    }
}