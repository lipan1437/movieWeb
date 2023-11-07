import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieDetails from "./MovieDetails";
import { BsSearch } from "react-icons/bs";
import Singlepage from "./Singlepage";

export const API_KEY = "39d967ab";

const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: #264653;
  color: wheat;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  background-color: white;
  border-radius: 6px;
  width: 50%;
  align-items: center;
`;

const SearchIcon = styled.div`
  width: 30px;
  height: 30px;
  color: black;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  /* border: none;
  outline: none; */
  margin-left: 15px;
`;
const ListMovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
`;

const MovieList = () => {
  const [search, setSearch] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState();
  const [selectMovie, onSelectMovie] = useState();

  //  http://www.omdbapi.com/?i=tt3896198&apikey=39d967ab

  const fetchData = async (searchString) => {
    const res = await axios.get(
      `http://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    updateMovieList(res.data.Search);
    console.log(res.data);
  };

  const getMovie = (e) => {
    clearTimeout(timeoutId);
    setSearch(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 300);
    updateTimeoutId(timeout);
  };

  return (
    <Container>
      <Header>
        <AppName>
          <MovieImage
            src="https://t3.ftcdn.net/jpg/00/96/08/92/240_F_96089280_lEGIoH9IGb0CF0mf15U7rUewR8wgXIm8.jpg"
            alt="movie-logo"
          />
          MovieUp+
        </AppName>
        <SearchBox>
          <SearchIcon>
            <BsSearch />
          </SearchIcon>
          <SearchInput
            placeholder="Search Movie"
            onChange={getMovie}
            value={search}
          />
        </SearchBox>
      </Header>
      {selectMovie && (
        <Singlepage selectMovie={selectMovie} onSelectMovie={onSelectMovie} />
      )}
      <ListMovieContainer>
        {movieList?.length
          ? movieList?.map((movie, index) => (
              <MovieDetails
                key={index}
                movie={movie}
                onSelectMovie={onSelectMovie}
              />
            ))
          : "Please search any movie!"}
      </ListMovieContainer>
    </Container>
  );
};

export default MovieList;
