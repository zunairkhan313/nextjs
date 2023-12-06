import UsersPost from "@/Components/UsersPost";
import getUserDetail from "@/app/lib/getUserDetail";
import getUserPost from "@/app/lib/getUserPost";
import { Suspense } from "react";


export async function generateMetadata({params}){
    const userInfo = await getUserDetail(params.id)
    return{
        title : userInfo.name,
        description : userInfo.email
    }
}



export default async function BlogDetail({params}){


    const userInfo = getUserDetail(params.id)
    const userPost = getUserPost(params.id)

    const [user] = await Promise.all([userInfo])

  
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
         
         <div>
            <h3 className="font-semibold">User Name : {user.name}</h3>
            <h3 className="font-semibold">User Email:{user.email} </h3>
            <Suspense fallback={<h2>Loading....</h2>}>
               <UsersPost promise={userPost}/>
            </Suspense>
            {/* {
                post.map((data)=>{
                    return(
                        <div className="p-5 w-full m-4 bg-blue-100 rounded-md">
                         <h1 className="font-bold">{data.title}</h1>
                         <p>{data.body}</p>
                        </div>

                    )
                })
            } */}
         </div>
 
        </main>
    )
}