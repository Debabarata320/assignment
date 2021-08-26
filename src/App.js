import React, { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const initialFormData = Object.freeze({
    firstName: "",
    lastName: "",
    email: "",
    contact: ""
  });
  const [formData, updateFormData] = React.useState(initialFormData);
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };
  return (
    <div className="App">
      <div className="row mt-5 pt-5 w-100">
      <div className="col-4"></div>
          <div className="col-4">
          <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  First Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" name="firstName" placeholder="E.g John" onChange={handleChange} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Last Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" name="lastName" placeholder="E.g clark" onChange={handleChange}/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" name="email" placeholder="E.g john@email.com" onChange={handleChange}/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Contact
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="number" name="contact" placeholder="E.g +91 9000 56 7687" onChange={handleChange}/>
                </Col>
              </Form.Group>
              <button
        className="openModalBtn offset-5"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>
            </Form>
           
          </div>
          <div className="col-4"></div>
        </div>
      

      {modalOpen && <Modal setOpenModal={setModalOpen} props={formData} />}
    </div>
  );
}

export default App;
