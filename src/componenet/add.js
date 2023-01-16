import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

export default function AddMovie({addHandler}) {
  const [show, setShow] = useState((false));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState("");

    const addMovie=()=>{
      addHandler({id: Math.random() ,title , rate ,description , posterUrl})
      handleClose();
    };


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
Add New Movie      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Title</Form.Label>
        <Form.Control type="text" placeholder="Title" onChange={(e)=> setTitle(e.target.value)} />
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Desscription" onChange={(e)=> setDescription(e.target.value)} />
        <Form.Label>Poster URL</Form.Label>
        <Form.Control type="text" placeholder="Poster Url" onChange={(e)=> setPosterUrl(e.target.value)}/>
        <Form.Label>Rate</Form.Label>
        <Form.Control type="text" placeholder="Rate" onChange={(e)=> setRate(e.target.value)}  />
       
      </Form.Group></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}