export const getPosts=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json());
    return res;
}

export const getUsers=async()=>{
    const res=await fetch('https://randomuser.me/api/',{
        method:"GET",
    }).then((e)=>e.json());
    return res;
}