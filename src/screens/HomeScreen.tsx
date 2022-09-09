import DocTable from "components/DocTable";
import SearchDoc from "components/SearchDoc";
import { getDocs } from "features/docs/docSlice";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import React, { useEffect } from "react";
import { Card, Container, Tab, Tabs } from "react-bootstrap";

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { docLoading, docs } = useAppSelector((state) => state.doc);

  useEffect(() => {
    dispatch(getDocs());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-center my-5 title">المكاتبات اليومية</h1>
      {/* audio here */}
      <Container className="text-center">
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="البريد الوارد">
            <Card className="p-3">
              <DocTable docType={1} content={docs} isLoading={docLoading} />
            </Card>
          </Tab>
          <Tab eventKey="sent" title="البريدالمُرسَل">
            <Card className="p-3">
              <DocTable docType={2} content={[]} isLoading={false} />
            </Card>
          </Tab>
          <Tab eventKey="add" title="إضافة مكاتبة">
            <Card className="p-3">
              <Container>
                <SearchDoc />
              </Container>
            </Card>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default HomeScreen;
