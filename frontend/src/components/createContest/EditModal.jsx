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
    <Modal
      ref={editEntryRef}
      onClose={editEntryRef.current?.close}
      className="w-[90vw] max-w-[800px]"
    >
      <div className="grid grid-rows-[repeat(5,minmax(40px,auto))] gap-4 sm:gap-8">
        <h2 className="text-3xl font-bold">Edit Entry</h2>
        <div className="bg-tertiary-400 shadow-tertiary-800 items-center gap-4 overflow-hidden rounded-md p-2 text-black shadow-md sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:pr-4">
          <div className="bg-primary-500 row-span-2 mx-auto flex aspect-[4/3] max-w-[400px]">
            <img
              src={getCoverImageUrl(creation.content.entries[editingIndex]?.url)}
              alt="entry image"
              loading="lazy"
            />
          </div>
          <Input
            className="my-4 self-center"
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
        <div className="self-center justify-self-center">
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

        <div className="text-tertiary-300 flex flex-col text-xs sm:text-base">
          <p>Link Example :</p>
          <p>https://www.youtube.com/watch?v=xKmEOXZsU_0</p>
          <p>https://www.youtube.com/shorts/PMIoaCzUYBY</p>
        </div>

        <div className="flex justify-center gap-8">
          <Button onClick={editEntryRef.current?.close}>Close</Button>
          <Button onClick={handler.updateEntry}>Update</Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
