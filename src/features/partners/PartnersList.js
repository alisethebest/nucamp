import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap"; // Assuming you're using Reactstrap
import Error from "../../components/Error"; // Import the Error component from its correct path
import Loading from "../../components/Loading"; // Import the Loading component from its correct path
import Partner from "../../app/shared/oldData/Partner"; // Import the Partner component from its correct path

const PartnersList = () => {
  const partners = useSelector((state) => state.partners.partnersArray); // You can adjust this path according to your actual state shape
  const isLoading = useSelector((state) => state.partners.isLoading);
  const errMsg = useSelector((state) => state.partners.errMsg);

  return isLoading ? (
    <Loading />
  ) : errMsg ? (
    <Error errMsg={errMsg} />
  ) : (
    <Col className="mt-4">
      <Row>
        {partners.map((partner) => {
          return (
            <div className="d-flex mb-5" key={partner.id}>
              <Partner partner={partner} />
            </div>
          );
        })}
      </Row>
    </Col>
  );
};

export default PartnersList;
