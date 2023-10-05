import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../../app/shared/oldData/promotionsSlice"; // Change this to where your promotionsSlice is located
import { selectFeaturedPartner } from "../partners/partnersSlice"; // Make sure this selector exists in your partnersSlice

const DisplayList = () => {
  const items = useSelector((state) => [
    selectFeaturedCampsite(state),
    selectFeaturedPromotion(state),
    selectFeaturedPartner(state),
  ]);

  // Log items for debugging
  console.log("display items:", items);

  return (
    <Row>
      {items.map(
        (item, idx) =>
          item && (
            <Col md className="m-1" key={idx}>
              <AnimatedDisplayCard item={item} />
            </Col>
          )
      )}
    </Row>
  );
};

export default DisplayList;


