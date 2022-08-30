import React from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import logo from '../../assets/logo.png';

const LoginScreen = () => {
  return (
    <div>
      <div className="formCard">
        <Card className="p-3 mt-3">
          <div>
            <img className="rounded mx-auto d-block" src={logo} alt="logo" />
          </div>
          <div className="my-4">
            <h1 className="text-center mainTitle">منظومة البريد</h1>
          </div>
          <Form>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Select>
                    <option>departments</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select>
                    <option>usernames</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="form-group py-3">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button type="submit" className="btn btn-primary my-3">
                Login
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LoginScreen;
