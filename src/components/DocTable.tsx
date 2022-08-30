import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import ConfirmSend from './ConfirmSend';
import ConfirmDelete from './ConfirmDelete';

interface Props {
  docType: number;
}

const DocTable: React.FC<Props> = ({ docType }) => {
  const [confirm, setConfirm] = useState(false);
  const [del, setDel] = useState(false);

  const closeConfirm = () => setConfirm(false);
  const showConfirm = () => setConfirm(true);
  const closeDelete = () => setDel(false);
  const showDelete = () => setDel(true);

  return (
    <Container className="">
      {true ? (
        <Table className="table table-hover ">
          <thead>
            <tr>
              {docType === 3 ? (
                <>
                  <th aria-label="control buttons" scope="col" />
                  <th scope="col">التاريخ</th>
                </>
              ) : (
                <th aria-label="control buttons" scope="col" />
              )}

              <th scope="col">الملخص</th>
              <th scope="col">اسم المكاتبة</th>
              <th scope="col">م</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: '40%' }}>
                {docType !== 3 ? (
                  <FontAwesomeIcon
                    style={{ verticalAlign: 'middle' }}
                    className="clickable m-3 fa-2x"
                    color="red"
                    icon={faXmark}
                    onClick={showDelete}
                  />
                ) : (
                  <></>
                )}
                {docType !== 2 ? (
                  <Button
                    className="mx-1"
                    variant="success"
                    onClick={showConfirm}
                  >
                    ارسال
                  </Button>
                ) : (
                  <></>
                )}

                <Button className="mx-1" variant="info">
                  عرض
                </Button>
                {docType === 1 ? (
                  <Button className="mx-1" variant="warning">
                    التوقيع
                  </Button>
                ) : (
                  <></>
                )}
              </td>
              {docType === 3 ? <td>date</td> : <></>}

              <td style={{ width: '30%' }}>summary</td>
              <td style={{ width: '30%' }}>orgname</td>
              <td style={{ width: '10%' }}>number</td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <>
          {docType === 1 ? (
            <h4>لا يوجد مكاتبات جديدة</h4>
          ) : (
            <h4>لم يرسل مكاتبات بعد</h4>
          )}
        </>
      )}
      <ConfirmSend show={confirm} handleClose={closeConfirm} />
      <ConfirmDelete show={del} handleClose={closeDelete} />
    </Container>
  );
};

export default DocTable;
