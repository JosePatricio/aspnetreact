import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const EditUserForm = (props) => {
  const { edit } = useContext(GlobalContext);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const [user, setUser] = useState(props.currentUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.name && user.username) {
      const resp = await edit(user);
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
          <Form.Label>
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
                Actualizar
              </Button>
              <Button
                className="button-primary"
                variant="primary"
                onClick={() => props.setEditing(false)}
                type="submit"
              >
                Cancelar
              </Button>
            </Form.Group>
          </Form.Label>
        </Col>
      </Row>
    </Container>
  );
};

export default EditUserForm;
