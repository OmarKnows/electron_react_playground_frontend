import React from 'react';
import { Card, Container, Table } from 'react-bootstrap';

const LogScreen: React.FC = () => {
  return (
    <Container className="text-center">
      <h1 className=" my-5 title">Monitoring Logs</h1>
      <Card className="p-3">
        <Table>
          <thead>
            <tr>
              <th>اليوم</th>
              <th>التوقيت</th>
              <th> المكاتبة</th>
              <th>العملية</th>
              <th>الإسم</th>
              <th>م</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>date</td>
              <td>time</td>
              <td>file</td>
              <td>action</td>
              <td>username</td>
              <td>number</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default LogScreen;
