import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const RegisterScreen: React.FC = () => {
  return (
    <div>
      <h1 className="mt-5 text-center title">تسجيل حساب</h1>

      <Card className="p-3 mt-3 formCard">
        <Form>
          <Form.Group controlId="username">
            <Form.Label className="my-2">الاسم</Form.Label>
            <Form.Control type="username" placeholder="ادخل الاسم" />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label className="my-2">كلمة السر</Form.Label>
            <Form.Control type="password" placeholder="ادخل كلمة السر" />
          </Form.Group>

          <Form.Group controlId="department">
            <Form.Label className="my-2">القسم</Form.Label>
            <Form.Select>
              <option value="department number">department</option>
            </Form.Select>
          </Form.Group>
          <Button className="my-3" type="submit" variant="success">
            تسجيل
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default RegisterScreen;
