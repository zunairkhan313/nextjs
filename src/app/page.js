'use client'
import Link from "next/link"

import { useRouter } from "next/navigation"


export default function Home() {

  const router = useRouter()

  const handleOnClickBlog= ()=>{
router.push('/dog')
  }
  const handleOnClickBlog1= ()=>{
router.push('/blog')
  }
  return (
    <main>
{/* <h1 style={{fontSize : 29,fontWeight : "bold"}}>Student List</h1>
<br/>
<br/>
<ul>
  <li>
    <Link href="/1">Zunair</Link>
  </li>
  <li>
  <Link href="/2">Shees</Link>
  </li>
  <li>
  <Link href="/3">Yousha</Link>
  </li>
  <li>
  <Link href="/4">Nahyan</Link>
  </li>
  <li>
  <Link href="/5">Shayan</Link>
  </li>
</ul><br/> */}

<button onClick={handleOnClickBlog} className="p-2 px-4 m-3 bg-red-400">
  Dog
</button>
<button onClick={handleOnClickBlog1} className="p-2 px-4 m-3 bg-red-400">
  Blogs
</button>
    </main>
  )
}
