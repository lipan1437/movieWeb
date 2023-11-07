import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieDetails from "./MovieDetails";
import { BsSearch } from "react-icons/bs";
import Singlepage from "./Singlepage";
import DefaultMovie from "./DefaultMovie";

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

  let movie = [
    {
      date: "2 Nov 2022",
      imdb: 9.6,
      name: "Vikrant Rona ",
      poster:
        "https://imgshare.info/images/2022/07/28/c9eaec504f4337a22225465a71b65dcb.jpg",
    },

    {
      date: "5 Jan 2022",
      imdb: "7.5",
      name: "Ek Villain Returns",
      poster:
        "https://imgshare.info/images/2022/07/29/7078be0724fdba1c52c4d1d9ae600fd8.jpg",
    },
    {
      date: "11 Nov 2022",
      imdb: "6.8",
      name: "Good Luck Jerry  ",
      poster:
        "https://imgshare.info/images/2022/07/29/8a2b3fd0001eb859c6caae4e7fd1004c.jpg",
    },
    {
      date: "10 June 2022",
      imdb: "8.2",
      name: "Rocketry &#8211; The Nambi Effect ",
      poster:
        "https://imgshare.info/images/2022/07/01/df9fbb422f3f6a4349aa3df3c90f4ec1.jpg",
    },
    {
      date: "2 Nov 2022",
      imdb: "8.1",
      name: "Jug Jugg Jeeyo ",
      poster:
        "https://imgshare.info/images/2022/06/24/1bb334863d9b83a7d6d21ca120cfa283.jpg",
    },
    {
      date: "8 Aug 2022",
      imdb: "7.8",
      name: "Judaa Hoke Bhi ",
      poster:
        "https://imgshare.info/images/2022/07/18/a9ec5b31f8ed7b012c99157adb5e88ff.jpg",
    },
    {
      date: "4 Sept 2022",
      imdb: "8.5",
      name: "Jaadugar &#8211; Love Goals ",
      poster:
        "https://imgshare.info/images/2022/07/15/a1f296e890a61cc76a5b944bd9e71d7c.jpg",
    },
    {
      date: "2 Oct 2022",
      imdb: "8.9",
      name: "Janhit Mein Jaari ",
      poster:
        "https://imgshare.info/images/2022/06/10/e627a170a066f0da201cb7ebab5037b3.jpg",
    },
    {
      date: "3 july 2022",
      imdb: "8.8",
      name: "Mere Desh Ki Dharti ",
      poster:
        "https://imgshare.info/images/2022/07/09/b5081706b95d13c476c03fe79cb3b568.jpg",
    },
  ];

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
          : movie.map((el, i) => {
              return (
                <DefaultMovie
                  key={i}
                  movie={el}
                  onSelectMovie={onSelectMovie}
                />
              );
            })}
      </ListMovieContainer>
    </Container>
  );
};

export default MovieList;
