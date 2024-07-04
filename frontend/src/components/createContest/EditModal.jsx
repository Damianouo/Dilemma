import { useCreationCtx } from "../../hooks/useCreationCtx";
import useModalCtx from "../../hooks/useModalCtx";
import { getCoverImageUrl } from "../../utils/entry";

import Button from "../UI/Button";
import ErrorMessage from "../UI/ErrorMessage";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import PendingMessage from "../UI/PendingMessage";
import SuccessMessage from "../UI/SuccessMessage";

const EditModal = () => {
  const { editEntryRef } = useModalCtx();
  const { creation, handler } = useCreationCtx();
  const { editingIndex } = creation.updateEntry;

  return (
    <Modal ref={editEntryRef} onClose={editEntryRef.current?.close}>
      <div className="grid grid-rows-[repeat(5,_minmax(40px,_auto))] gap-8">
        <h2 className=" text-3xl font-bold">Edit Entry</h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 overflow-hidden rounded-md bg-tertiary-400 pr-4 text-black shadow-md shadow-tertiary-800">
          <div className="row-span-2 flex max-w-[300px] items-center">
            <img
              src={getCoverImageUrl(
                creation.content.entries[editingIndex]?.url,
              )}
              alt="entry image"
            />
          </div>
          <Input
            className="self-center"
            onChange={handler.entryTitleChange}
            label="Title"
            id="editTitleInput"
            value={creation.updateEntry.entryTitleInput}
          />
          <Input
            className="self-center"
            onChange={handler.entryUrlChange}
            label="Link"
            id="editUrlInput"
            value={creation.updateEntry.entryUrlInput}
          />
        </div>
        <div className=" self-center justify-self-center">
          {creation.updateEntry.state === "loading" && (
            <PendingMessage>Please wait...</PendingMessage>
          )}
          {creation.updateEntry.state === "successful" && (
            <SuccessMessage>Update successful!</SuccessMessage>
          )}
          {creation.updateEntry.state === "error" && (
            <ErrorMessage>{creation.updateEntry.errorMessage}</ErrorMessage>
          )}
        </div>

        <p className=" flex flex-col px-4 text-base text-tertiary-300">
          <span>Link Example :</span>
          <span>https://www.youtube.com/watch?v=xKmEOXZsU_0</span>
          <span>https://www.youtube.com/shorts/PMIoaCzUYBY</span>
        </p>

        <div className=" flex justify-center gap-8">
          <Button onClick={editEntryRef.current?.close}>Close</Button>
          <Button onClick={handler.updateEntry}>Update</Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
