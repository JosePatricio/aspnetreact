import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const AddUserForm = (props) => {
  const initUser = { id: null, name: "", username: "" };

  const [user, setUser] = useState(initUser);

  const { add, users } = useContext(GlobalContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.name && user.username) {
      const newUser = {
        id: users.length + 1,
        name: user.name,
        username: user.username,
      };

      const resp = await add(newUser);
      if (resp.status) {
        alert("Guardado exitósamente");
      } else {
        alert("Error, intente de nuevo");
      }
    }
  };

  return (
    <Container style={{ padding: 16 }}>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <input
                className="u-full-width"
                type="text"
                value={user.name}
                name="name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Usuario</Form.Label>
              <input
                className="u-full-width"
                type="text"
                value={user.username}
                name="username"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Button
                className="button-primary"
                variant="primary"
                onClick={handleSubmit}
                type="submit"
              >
                Agregar usuario
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddUserForm;
