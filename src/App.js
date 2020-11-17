 import './App.css';
 import Movie from './movie'
 import React,{useState,useEffect} from 'react';
function App() {
  const [movies,setMovies]=useState([]);
   const [search,setSearch]=useState('');
  const [query,setQuery]=useState('home alone');
  useEffect(()=>{
    getMovies()
  },[query]);
  const updateSearch=e=>{
    setSearch(e.target.value);
  }
  const getSearch= e=>{
    e.preventDefault();
    setQuery(search);
  }
  const getMovies=()=>{
          fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${query}`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-key": "",
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
          }
        })
        .then(function(res){
          return res.json();
        })
        .then(function(data){
          setMovies(data.titles);
          console.log(data.titles);
        })
        .catch(err => {
          console.error(err);
        });
  } 
  return (
    <div className="App">
      <header className="App-header"> 
      </header>
      <div>
        <form onSubmit={getSearch} className="search-form">
          <input type="text" value={search} onChange={updateSearch} className="search-bar" placeholder="Search" />
          <button type="submit" className="search-button">search</button>
        </form>
      {
        movies.map(movie=>(
          <Movie
            title={movie.title}
            img={movie.image}
          />
        ))
      } 
      </div> 
    </div>
  );
}

export default App;
