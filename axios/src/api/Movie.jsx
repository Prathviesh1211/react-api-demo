import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../components/Card'
import './Movie.css'
import { useFetch } from './GetData';

const Movie = () => {
    const [data,setData]=useState([])


    const getData=async()=>{
        try{
            const res=await useFetch();
            console.log(res);
            setData(res.data.Search);
        }catch(error){
            console.error(error)
        }
    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <ul className='card'>
        { data.length>0 &&
            data.map((ele)=>(
                <Card key={ele.imdbID} movieData={ele} />
            ))
        }
    </ul>
  )
}

export default Movie
