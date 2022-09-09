import React, { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import ConfirmSend from "./ConfirmSend";
import ConfirmDelete from "./ConfirmDelete";
import Loader from "./Loader";
import { Doc } from "../features/docs/docModel";

interface Props {
  docType: number; // type 1: recieved, type 2: sent, type 3: search/add
  isLoading: boolean;
  content: Doc[];
}

const DocTable: React.FC<Props> = ({ docType, content, isLoading }) => {
  var cnt = 0;

  const [confirm, setConfirm] = useState(false);
  const [del, setDel] = useState(false);

  const closeConfirm = () => setConfirm(false);
  const showConfirm = () => setConfirm(true);
  const closeDelete = () => setDel(false);
  const showDelete = () => setDel(true);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {content ? (
            <>
              {content.length ? (
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
                    {content.map((doc) => (
                      <tr key={cnt}>
                        <td>
                          {docType !== 3 ? (
                            <Button
                              className="mx-1"
                              variant="danger"
                              onClick={showDelete}
                            >
                              حذف
                            </Button>
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
                        <td style={{ width: "30%" }}>{doc.summary}</td>
                        <td style={{ width: "30%" }}>{doc.orgname}</td>
                        <td style={{ width: "10%" }}>{++cnt}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <>
                  {docType === 1 ? (
                    <h4>لا يوجد مكاتبات جديدة</h4>
                  ) : docType === 2 ? (
                    <h4>لم يرسل مكاتبات بعد</h4>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </>
      )}
      <ConfirmSend show={confirm} handleClose={closeConfirm} />
      <ConfirmDelete show={del} handleClose={closeDelete} />
    </Container>
  );
};

export default DocTable;
