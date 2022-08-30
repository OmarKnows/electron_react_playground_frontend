import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

interface Props {
  show: boolean;
  handleClose: () => void;
}

const ConfirmSend: React.FC<Props> = ({ show, handleClose }) => {
  const [checkedState, setCheckedState] = useState(new Array(8).fill(false));
  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((perm, index) =>
      index === position ? !perm : perm
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>الأقسام المرسل إليها</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="department 1"
              checked={checkedState[0]}
              onChange={() => handleOnChange(0)}
            />
            <Form.Check
              type="checkbox"
              label="department 2"
              checked={checkedState[1]}
              onChange={() => handleOnChange(1)}
            />
            <Form.Check
              type="checkbox"
              label="department 3"
              checked={checkedState[2]}
              onChange={() => handleOnChange(2)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            غلق
          </Button>
          <Button variant="success" onClick={handleClose}>
            إرسال
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ConfirmSend;
