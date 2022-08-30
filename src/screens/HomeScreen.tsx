import DocTable from 'components/DocTable';
import React from 'react';
import { Card, Container, Tab, Tabs } from 'react-bootstrap';

const HomeScreen: React.FC = () => {
  return (
    <div>
      <h1 className="text-center my-5 title">المكاتبات اليومية</h1>
      {/* audio here */}
      <Container className="text-center">
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="البريد الوارد">
            <Card className="p-3">
              <DocTable incoming />
            </Card>
          </Tab>
          <Tab eventKey="sent" title="البريدالمُرسَل">
            <Card className="p-3">
              <DocTable incoming={false} />
            </Card>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default HomeScreen;
