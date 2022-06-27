import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { Movie } from '@mui/icons-material';
import Movies from '../movies/movies';
import Series from '../series/series';

function NavigationBar() {
  return (
    <Router>
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/movies'}>
          <LocalMoviesOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            OMDb</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/movies'} >Movies</Nav.Link>
            <Nav.Link as={Link} to={'/series'}>TV Series</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    <div>
      <Routes>
        <Route path="/movies" element={<Movies/>} />
        <Route path="/series" element={<Series/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default NavigationBar;