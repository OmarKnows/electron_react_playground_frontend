import React from 'react';
import { Button, Modal } from 'react-bootstrap';

interface Props {
  show: boolean;
  handleClose: () => void;
}

const ConfirmDelete: React.FC<Props> = ({ show, handleClose }) => {
  return (
    <div>
      {true ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>رسالة تأكيد</Modal.Title>
          </Modal.Header>
          <Modal.Body>هل أنت متـأكد من حذف - orgname - fileID</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              غلق
            </Button>
            <Button variant="success">تأكيد الحذف</Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ConfirmDelete;
