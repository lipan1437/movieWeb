import React from "react";
import styled from "styled-components";
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
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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

const DefaultMovie = (props) => {
  const { date, imdb, name, poster } = props.movie;
  return (
    <MovieContainer>
      <CoverImage src={poster} alt={name} />
      <MovieName>{name}</MovieName>
      <InfoColumn>
        <MovieInfo>Year: {date}</MovieInfo>
        <MovieInfo>IMDB: {imdb}</MovieInfo>
      </InfoColumn>
    </MovieContainer>
  );
};

export default DefaultMovie;