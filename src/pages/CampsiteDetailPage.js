import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CommentsList from "../features/comments/CommentsList";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";

const CampsiteDetailPage = () => {
  const { campsiteId } = useParams();
  const campsite = useSelector(selectCampsiteById(campsiteId));
  console.log("campsite", campsite);

  const isLoading = useSelector((state) => state.campsites.isLoading);
  const errMsg = useSelector((state) => state.campsites.errMsg);
  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (errMsg) {
    content = <Error errMsg={errMsg} />;
  } else {
    content = (
      <>
        <CampsiteDetail campsite={campsite} />
        <CommentsList campsiteId={campsiteId} />
      </>
    );
  }

  return (
    <Container>
      {campsite && <SubHeader current={campsite.name} detail={true} />}
      <Row>{content}</Row>
    </Container>
  );
};

export default CampsiteDetailPage;
