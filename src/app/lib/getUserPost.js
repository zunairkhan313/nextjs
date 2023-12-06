

export default async function getUserPost(id) {

    await new Promise((resolve)=> setTimeout(() => {
        resolve()
    }, 3000))
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }