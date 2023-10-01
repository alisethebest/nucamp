import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
} from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux"; // Import useDispatch
import { addComment } from "./commentsSlice"; // Import addComment action
import { validateCommentForm } from "../../utils/validateCommentForm";

const CommentForm = ({ campsiteId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch(); // Declare dispatch

  const handleSubmit = (values) => {
    // Create comment object
    const comment = {
      campsiteId: parseInt(campsiteId),
      rating: values.rating,
      author: values.author,
      text: values.commentText,
      date: new Date(Date.now()).toISOString(), // Add date property
    };

    console.log("Comment:", comment);
    dispatch(addComment(comment)); // Dispatch addComment action
    setModalOpen(false); // Close the modal
  };

  return (
    <>
      <Button outline onClick={() => setModalOpen(true)}>
        <i className="fa fa-pencil fa-lg" /> Add Comment
      </Button>
      <Modal isOpen={modalOpen}>
        <ModalHeader toggle={() => setModalOpen(false)}>
          Add Comment
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{ rating: undefined, author: "", commentText: "" }}
            onSubmit={handleSubmit}
            validate={validateCommentForm}
          >
            <Form>
              {/* Existing Form Fields */}
              <Button type="submit" color="primary">
                Submit
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CommentForm;
