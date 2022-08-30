import React, { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import DocTable from './DocTable';

const SearchDoc: React.FC = () => {
  const [imp, setImp] = useState(true);
  return (
    <Form>
      <Form.Group className="text-right">
        <Form.Label>رقم المكاتبة</Form.Label>
        <Form.Control className="text-right" type="number" />
      </Form.Group>
      <Form.Group className="my-3">
        <div key="inline-radio">
          <Form.Check
            inline
            name="group1"
            type="radio"
            label="وارد"
            checked={imp}
            onChange={() => setImp(!imp)}
          />
          <Form.Check
            inline
            name="group1"
            type="radio"
            label="صادر"
            checked={!imp}
            onChange={() => setImp(!imp)}
          />
        </div>
      </Form.Group>
      <Button className="w-50" color="info">
        بحث
      </Button>
      <Card className="p-3 my-3">
        <Container>
          <DocTable docType={3} />
        </Container>
      </Card>
    </Form>
  );
};

export default SearchDoc;
