import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import { useQAOverviewContext } from '../../../context';
import { QAType } from '../../../types/QAType';
import { AnswerInput } from './AnswerInput';
import { QuestionInput } from './QuestionInput';

type Props = {
  editData: QAType;
};

export const EditQA: React.FC<Props> = ({ editData }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formMethods = useForm();
  const {
    methods: { deleteQA },
  } = useQAOverviewContext();

  const handleEditSave = (data: any) => {
    console.log(data);
  };

  const handleDelete = () => {
    deleteQA(editData);
  };

  return (
    <>
      <button type="button" className="btn-icon" onClick={() => handleShow()}>
        <div className="icon icon-edit" />
      </button>
      <FormProvider {...formMethods}>
        <form>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Question and Answer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <QuestionInput defaultQA={editData} />
              <AnswerInput defaultQA={editData} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={handleEditSave}>
                Save Changes
              </Button>
              <Button variant="dark" onClick={handleDelete}>
                Delete QA
              </Button>
            </Modal.Footer>
          </Modal>
        </form>
      </FormProvider>
    </>
  );
};
