import axios from "axios";

const api=axios.create({
    baseURL:"https://www.omdbapi.com/"
,})

export const useFetch=()=>{
    return api.get("?i=tt3896198&apikey=1c12799f&s=transformers&page=1");
}