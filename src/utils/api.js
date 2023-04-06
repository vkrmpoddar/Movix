import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

//const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const TMDB_TOKEN =
  " eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2E4NmNjZGUwNDZmODgxN2NmOTExYTgzYTgyZjYxMiIsInN1YiI6IjYyNzQxMTAzYmRjMzRjMDA2NjY5NzgwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.smWByZTLVWQEbZdTZMyCOtmhgeSM6Cxt6KdDtE2vxLo";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    } catch (err){
        console.log(err);
        return err;
    }

}