import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";
import DisplayCard from "./DisplayCard";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice"; // Import the selector

const DisplayList = () => {
  const featuredCampsite = useSelector(selectFeaturedCampsite); // Use useSelector hook
  const featuredPromotion = useSelector(selectFeaturedPromotion); // Use useSelector hook
  const featuredPartner = useSelector(selectFeaturedPartner); // Get the featured partner using useSelector

  const items = [featuredCampsite, featuredPromotion, featuredPartner]; // Add featuredPartner to the items array

  return (
    <Row>
      {items.map((item, idx) => (
        <Col md className="m-1" key={idx}>
          <DisplayCard item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default DisplayList;
