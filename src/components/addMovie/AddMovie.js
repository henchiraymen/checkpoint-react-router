import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
// import movie9 from '../../Assets/movie9.jpg';

import "./AddMovie.css";

const AddMovie = ({ movies, setMovies }) => {
  const [show, setShow] = useState(false);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    rating: 0,
    img: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const addMovie = (newMovie) => {
    setMovies([newMovie, ...movies]);
    handleClose();
    setNewMovie({ title: "", description: "", rating: 0, img: "" });
  };

  return (
    <>
      <Button variant="success" onClick={handleShow} className="addBtn">
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          {/* Title of the new movie */}
          <Form.Control
            type="text"
            className="modalInput"
            // value={newTitle}
            // onChange={(e) => setNewTitle(e.target.value)}
            name="title"
            value={newMovie.title}
            onChange={handleChange}
            placeholder="Enter movie title ..."
          />
          {/* Description of the new movie */}
          <Form.Control
            type="text"
            className="modalInput"
            // value={newTitle}
            // onChange={(e) => setNewTitle(e.target.value)}
            name="description"
            value={newMovie.description}
            onChange={handleChange}
            placeholder="Enter movie description ..."
          />

          {/* Rating of the new movie */}
          <Form.Control
            type="number"
            className="modalInput"
            // value={newRating}
            // onChange={(e) => setNewRating(e.target.value)}
            name="rating"
            value={newMovie.rating}
            onChange={handleChange}
            placeholder="Enter movie rating ..."
            min="1"
            max="5"
          />
          {/* the url of the new movie */}
          <Form.Control
            type="text"
            className="modalInput"
            // value={newImg}
            // onChange={(e) => setNewImg(e.target.value)}
            name="img"
            value={newMovie.img}
            onChange={handleChange}
            placeholder="Enter movie URL ..."
          />

          {/* Img url of the new movie */}
          <Form.Control
            type="text"
            className="modalInput"
            // value={newImg}
            // onChange={(e) => setNewImg(e.target.value)}
            name="img"
            value={newMovie.img}
            onChange={handleChange}
            placeholder="Enter movie image URL ..."
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={() =>
              addMovie({
                id: Math.random(),
                title: newMovie.title,
                description: newMovie.description,
                rating: newMovie.rating,
                img: newMovie.img,
              })
            }
          >
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;
