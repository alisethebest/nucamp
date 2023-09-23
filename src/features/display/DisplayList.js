import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";

const DisplayList = () => {
  const featuredCampsite = useSelector(selectFeaturedCampsite);
  const featuredPromotion = useSelector(selectFeaturedPromotion);
  const featuredPartner = useSelector(selectFeaturedPartner);

  const items = [featuredCampsite, featuredPromotion, featuredPartner];

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
