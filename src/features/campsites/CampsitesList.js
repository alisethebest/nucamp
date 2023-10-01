import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux"; // Import useSelector
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from "./campsitesSlice";

const CampsitesList = () => {
  // Use useSelector hook to get campsites from Redux state
  const campsites = useSelector(selectAllCampsites);

  // Log campsites for debugging
  console.log("campsites:", campsites);

  return (
    <Row className="ms-auto">
      {campsites.map((campsite) => {
        return (
          <Col md="5" className="m-4" key={campsite.id}>
            <CampsiteCard campsite={campsite} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CampsitesList;
