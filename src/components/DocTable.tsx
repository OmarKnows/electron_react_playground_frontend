import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import ConfirmSend from './ConfirmSend';
import ConfirmDelete from './ConfirmDelete';

interface Props {
  incoming: boolean;
}

const DocTable: React.FC<Props> = ({ incoming }) => {
  const [confirm, setConfirm] = useState(false);
  const [del, setDel] = useState(false);

  const closeConfirm = () => setConfirm(false);
  const showConfirm = () => setConfirm(true);
  const closeDelete = () => setDel(false);
  const showDelete = () => setDel(true);

  return (
    <div>
      {true ? (
        <Table className="table table-hover ">
          <thead>
            <tr>
              <th aria-label="delete button" scope="col" />
              <th aria-label="control buttons" scope="col" />
              <th scope="col">الملخص</th>
              <th scope="col">اسم المكاتبة</th>
              <th scope="col">م</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <FontAwesomeIcon
                  className="clickable m-3"
                  color="red"
                  icon={faXmark}
                  onClick={showDelete}
                />
              </td>
              <td>
                {incoming ? (
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
                {incoming ? (
                  <Button className="mx-1" variant="warning">
                    التوقيع
                  </Button>
                ) : (
                  <></>
                )}
              </td>
              <td>summary</td>
              <td>orgname</td>
              <td>number</td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <>
          {incoming ? (
            <h4>لا يوجد مكاتبات جديدة</h4>
          ) : (
            <h4>لم يرسل مكاتبات بعد</h4>
          )}
        </>
      )}
      <ConfirmSend show={confirm} handleClose={closeConfirm} />
      <ConfirmDelete show={del} handleClose={closeDelete} />
    </div>
  );
};

export default DocTable;
