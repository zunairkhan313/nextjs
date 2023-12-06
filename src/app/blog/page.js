import Link from "next/link";
import getUser from "../lib/getUser";




export default async function Blogs(){

    const users = await getUser()
    console.log("users",users);

    return(

        <main className="flex min-h-screen flex-col justify-between p-24">
            <h1>Blogs</h1>
{
    users.map((data)=>{
        return(
            <Link href={`/blog/${data.id}`}>
            <div className="p-5 w-full m-4 bg-blue-100 rounded">
<h1 className="font-bold">{data.userId}</h1>
<p>{data.title}</p>
            </div>
             </Link>
        )
    })
}
        </main>
    )
}