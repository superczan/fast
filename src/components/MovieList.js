import React, { useEffect, useState } from 'react';
import { isCancel } from 'axios';
import { getMovieList } from '../api';
import {
  Card,
  Button,
  CardGroup,
  Image,
  Container,
  Modal,
  InputGroup,
  FormControl,
  Spinner,
} from 'react-bootstrap';

function MovieList() {
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState({});
  const [playlist, setPlaylist] = useState({});
  const [currentMovie, setCurrentMovie] = useState({});
  const [confirmMovie, setConfirmMovie] = useState(false);

  const handleClose = () => {
    setConfirmMovie(false);
    setCurrentMovie({});
  };
  const handleShow = () => setConfirmMovie(true);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value) {
      setLoading(true);
      getMovieList(e.target.value)
        .then((movies) => {
          setMovies(movies?.data ?? {});
          setLoading(false);
        })
        .catch((err) => {
          // console.log(err, 'error');
          if (!isCancel(err)) {
            setLoading(false);
          }
        });
    }
  };

  useEffect(() => {
    if (!searchValue) {
      setMovies({});
      setLoading(false);
    }
  }, [searchValue]);

  const addToPlaylist = () => {
    setPlaylist((playlist) => ({
      ...playlist,
      [currentMovie.imdbID]: currentMovie,
    }));
    setCurrentMovie({});
    setConfirmMovie(false);
  };
  const removeFromPlaylist = (movieId) => {
    setPlaylist((playlist) => {
      const { ...newPlaylist } = playlist;
      delete newPlaylist[movieId];
      return newPlaylist;
    });
  };
  return (
    <Container>
      <div className="">
        Welcome to OMDb Review.
        <br />
        Search for your favourite movies and save it to playlist.
      </div>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
        <FormControl
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          type="text"
          value={searchValue}
          name="search"
          placeholder="Search Movie by Title"
          onChange={handleChange}
        />
      </InputGroup>
      <div id="snackbar" className={movies?.Error ? 'show' : ''}>
        {movies?.Error}
      </div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : null}
      {movies?.Search?.length && (
        <CardGroup>
          {movies.Search.map((movieDetails) => (
            <Card key={movieDetails.imdbID} className="mb-2">
              <Card.Img
                variant="top"
                fluid
                src={movieDetails?.Poster}
                alt={movieDetails?.Title ?? 'poster'}
              />
              <Card.Body>
                <Card.Title>{movieDetails?.Title}</Card.Title>
                <Card.Text>Release Year: {movieDetails?.Year}</Card.Text>
                {playlist[movieDetails.imdbID] ? (
                  <Button
                    variant="secondary"
                    onClick={() => removeFromPlaylist(movieDetails.imdbID)}
                  >
                    Already Added
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => {
                      setCurrentMovie(movieDetails);
                      handleShow();
                    }}
                  >
                    Add to Playlist
                  </Button>
                )}
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      )}
      <Modal show={confirmMovie} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add {currentMovie.Title} to Playlist?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={addToPlaylist}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      {!!Object.keys(playlist).length && (
        <CardGroup>
          <Card>
            <Card.Header>Your Playlist:</Card.Header>
          </Card>
          {Object.keys(playlist).map((movieId) => {
            const playlistMovieDetail = playlist[movieId];
            return (
              <Card key={`playlist-item-${movieId}`}>
                <Image
                  fluid
                  src={playlistMovieDetail.Poster}
                  alt={playlistMovieDetail.Title}
                />
                <Card.Body>
                  <Card.Title>{playlistMovieDetail.Title}</Card.Title>
                  <Card.Text>
                    Release Year: {playlistMovieDetail.Year}
                  </Card.Text>

                  <Button
                    variant="secondary"
                    onClick={() => removeFromPlaylist(movieId)}
                  >Remove From Playlist</Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardGroup>
      )}
    </Container>
  );
}

export default MovieList;
