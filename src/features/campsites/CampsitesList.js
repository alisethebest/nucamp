import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap"; // Assuming you're using Reactstrap
import Loading from "../../components/Loading"; // Make sure to import from the correct path
import Error from "../../components/Error" // Make sure to import from the correct path

const CampsitesList = () => {
  const campsitesArray = useSelector((state) => state.campsites.campsitesArray);
  const isLoading = useSelector((state) => state.campsites.isLoading);
  const errMsg = useSelector((state) => state.campsites.errMsg);

   if (isLoading) {
     return (
       <Row>
         <Loading />
       </Row>
     );
   }

   if (errMsg) {
     return (
       <Row>
         <Error errMsg={errMsg} />
       </Row>
     );
   }

  // Assume campsitesArray is an array of objects, each containing a 'name' and an 'id'
  const renderCampsites = campsitesArray.map((campsite) => {
    return (
      <Col sm="4" key={campsite.id}>
        <div>{campsite.name}</div>
        {/* Additional campsite details can go here */}
      </Col>
    );
  });

  return <Row>{renderCampsites}</Row>;
};

export default CampsitesList;
