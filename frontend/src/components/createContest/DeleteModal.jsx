import useModalCtx from "../../hooks/useModalCtx";
import Modal from "../UI/Modal";
import Message from "../UI/Message";
import QuestionSvg from "../svgs/QuestionSvg";
import Button from "../UI/Button";
import { useCreationCtx } from "../../hooks/useCreationCtx";
import ContestItem from "../contest/ContestItem";

const DeleteModal = () => {
  const { deleteEntryRef } = useModalCtx();
  const { creation, handler } = useCreationCtx();
  const { editingIndex } = creation.updateEntry;
  const targetEntry = creation.content.entries?.[editingIndex];
  function handleDelete() {
    handler.deleteEntry(editingIndex);
    deleteEntryRef.current.close();
  }
  return (
    <Modal ref={deleteEntryRef} onClose={deleteEntryRef.current?.close}>
      <div className="flex flex-col items-center gap-8">
        <h2 className=" self-start text-3xl font-bold">Delete Entry</h2>
        <ContestItem className=" max-w-[300px] text-base" item={targetEntry} />
        <Message className="">
          <QuestionSvg />
          <span>Do you sure you wanna delete this entry?</span>
        </Message>
        <div className="flex gap-8">
          <Button onClick={deleteEntryRef.current?.close} className="w-20 ">
            No
          </Button>
          <Button onClick={handleDelete} className="w-20 ">
            Yes
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
