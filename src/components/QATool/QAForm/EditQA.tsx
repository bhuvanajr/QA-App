import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import { QAType } from 'types/QAType';
import { AnswerInput } from './AnswerInput';
import { QuestionInput } from './QuestionInput';

type Props = {
  editData: QAType;
  deleteFn: (data) => void;
  editFn: (data) => void;
};
//Todo:separate Modal make it reusable
export const EditQA: React.FC<Props> = ({ editData, editFn, deleteFn }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formMethods = useForm();

  const handleEditSave = (data: any) => {
    let editedQA: QAType = { question: data.question, answer: data.answer, qaId: editData.qaId };
    editFn(editedQA);
    handleClose();
  };

  const handleDelete = () => {
    deleteFn(editData);
    handleClose();
  };

  return (
    <>
      <button type="button" className="btn-icon" onClick={() => handleShow()}>
        <div className="icon icon-edit" />
      </button>

      <Modal show={show} onHide={handleClose}>
        <FormProvider {...formMethods}>
          <form onSubmit={formMethods.handleSubmit(handleEditSave)}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Question and Answer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <QuestionInput defaultQA={editData} />
              <AnswerInput defaultQA={editData} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" type="submit">
                Save Changes
              </Button>
              <Button variant="dark" onClick={handleDelete}>
                Delete QA
              </Button>
            </Modal.Footer>
          </form>
        </FormProvider>
      </Modal>
    </>
  );
};
