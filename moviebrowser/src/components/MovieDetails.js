import React from "react";
import styled from "styled-components";

// Poster
// :
// "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
// Title
// :
// "Iron Man"
// Type
// :
// "movie"
// Year
// :
// "2008"
// imdbID
// :
// "tt0371746"

const MovieDetails = (props) => {
  const { Title, Year, Type, Poster, imdbID } = props.movie;
  return (
    <MovieContainer>
      <CoverImage src={Poster} alt={Title} />
      <MovieName>{Title}</MovieName>
      <InfoColumn>
        <MovieInfo>Year: {Year}</MovieInfo>
        <MovieInfo>Type: {Type}</MovieInfo>
      </InfoColumn>
    </MovieContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  color: wheat;
  padding: 10px;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;

const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  /* white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden; */
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  text-transform: capitalize;
`;

export default MovieDetails;
