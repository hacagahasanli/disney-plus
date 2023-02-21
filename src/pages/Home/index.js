import { useEffect } from "react";
import { ImgSlider, Viewers, NewFilms } from "../../components";
import { filmsSections } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../store/movie";
import styled from "styled-components";
import db from "../../firebase";

export const Home = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);
  useEffect(() => {
    if (movies.recommend.length < 1) {
      db.collection("movies").onSnapshot((snapshot) => {
        dispatch(setMovies(snapshot.docs));
      });
    }
  }, [dispatch, movies]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      {filmsSections?.map(({ key, header }) => (
        <NewFilms {...{ header, key }} movies={movies[key]} />
      ))}
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("assets/images/home-background.png") center center/cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
