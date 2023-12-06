import Image from "next/image"

async function getDog() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random',{
        cache : 'no-cache'
    })

   
    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Dog() {
    const data = await getDog()
   console.log('data',data);
    return(
        
        <main className="flex min-h-screen flex-col items-center">
<div className="flex">
<h2>Dog</h2>
<Image src={data.message} height={400} width={400}/>
</div>
        </main>
        ) 
  }