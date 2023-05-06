import React,{useState, useEffect} from "react";
import axios from "axios";
import { createContext } from "react";

export const MyContext = React.createContext();


const MoviesProvider = ({ children }) => {
    // const [movies, setMovies] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [currentmovie, setCurrentMovie] = useState([]);
    const [currentgenre, setCurrentGenre] = useState([]);
    const [enteredmovie, setEnteredMovie] = useState([]);
    const [newpage, setNewpage] = useState();
    const [newquery, setNewQuery] = useState();
    const [newerror, setNewerror] = useState();
    const[loader, setLoader] = useState(false)
    const [genr, setGenr] = useState();
    const [nextpage, setNextPage] = useState();
    const [findpage, setFindPage] = useState(null);
    const [error, setError] = useState(null);

    // 
    const MoviesData = async () => {

        
        await axios
          .get(
            `https://yts.mx/api/v2/list_movies.json?&limit=12&page=${newpage}`
          )
          .then((response) => {
            setNewerror(response.data.status)
            setCurrentMovie(response.data.data);
      
            setLoader(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      const FetchMovieByName = async () => {
       
        await axios
          .get(
            `https://yts.mx/api/v2/list_movies.json?limit=12&page=${findpage}&query_term=${newquery}`
          )
          .then((response) => {
            setEnteredMovie(response.data.data);
           
            setLoader(false);
          })
          .catch((error) => {
            setError(error);
          });
      };
  
      const GenereChange = async () => {
      
        await axios
          .get(
            `https://yts.mx/api/v2/list_movies.json?genre=${genr}&limit=12&page=${nextpage}`
          )
          .then((response) => {
            setCurrentGenre(response.data);
            setLoader(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };
console.log(newquery)
    return (
    <MyContext.Provider value={{ currentmovie, findpage, setFindPage,setLoader, loader,genr,newerror,error,enteredmovie, nextpage, setNextPage, currentgenre,setNewpage, FetchMovieByName,newpage, newquery,setNewQuery,setGenr, GenereChange, MoviesData }}>
        {children}
      </MyContext.Provider>
    );
  };
  
  export default MoviesProvider;

