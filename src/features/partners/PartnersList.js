import React from "react";
import { Col } from "reactstrap";
import { useSelector } from "react-redux"; // Add this import
import Partner from "./Partner";
import { selectAllPartners } from "./partnersSlice";

function PartnersList() {
  // Use the useSelector hook instead of directly calling selectAllPartners
  const partners = useSelector(selectAllPartners);

  return (
    <Col className="mt-4">
      {partners.map((partner) => {
        return (
          <div className="d-flex mb-5" key={partner.id}>
            <Partner partner={partner} />
          </div>
        );
      })}
    </Col>
  );
}

export default PartnersList;
