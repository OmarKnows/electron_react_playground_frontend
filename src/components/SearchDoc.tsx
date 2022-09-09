import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import DocTable from "./DocTable";

const SearchDoc: React.FC = () => {
  const [imp, setImp] = useState(true);
  const [docNum, setDocNum] = useState("");
  return (
    <Form>
      <Form.Group className="text-right">
        <Form.Label>رقم المكاتبة</Form.Label>
        <Form.Control
          className="text-right"
          type="number"
          value={docNum}
          onChange={(e) => setDocNum(e.target.value)}
        />
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
      <Container className="p-3 my-3">
        <DocTable docType={3} content={[]} isLoading={false} />
      </Container>
    </Form>
  );
};

export default SearchDoc;
