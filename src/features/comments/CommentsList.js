import React from "react";
import { Col } from "reactstrap";
import { useSelector } from "react-redux"; // Add this import
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { selectCommentsByCampsiteId } from "./commentsSlice";

const CommentsList = ({ campsiteId }) => {
  // Use the useSelector hook instead of directly calling selectCommentsByCampsiteId
  const comments = useSelector(selectCommentsByCampsiteId(campsiteId));

  return (
    <Col md="5" className="m-1">
      <h4>Comments</h4>
      {comments && comments.length > 0 ? (
        <>
          {comments.map((comment) => {
            return <Comment key={comment.id} comment={comment} />;
          })}
          <CommentForm campsiteId={campsiteId} />
        </>
      ) : (
        <>
          <p>There are no comments for this campsite yet.</p>
          <CommentForm campsiteId={campsiteId} />
        </>
      )}
    </Col>
  );
};

export default CommentsList;
