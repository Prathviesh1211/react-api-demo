import React, { useEffect, useState } from 'react'
import { getPosts, getUsers } from './api/api'
import Card from './components/Card';
import UserCard from './components/UserCard';

const App = () => {

  const [data,setData]=useState(null);
  const [user,setUser]=useState(null);

  useEffect(()=>{
    getPosts().then((res)=>{
      setData(res)
      // console.log(res);
    });
  },[])

  const fetchUser=()=>{
    getUsers().then((res) => {
      setUser(res.results[0]); // ✅ Use results[0] for 1 user from randomuser.me
      console.log(res);
    });
  }

   useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className='app'>
      {/* {data?data.map((ele,ind)=>(
        <Card key={ind} title={ele.title} id={ele.id} body={ele.body}></Card>
      )):<p>Error Fetching Data</p>} */}
      {user && 
        <UserCard data={user} onRefresh={fetchUser}/> 
      }
      </div>
  )
}

export default App
