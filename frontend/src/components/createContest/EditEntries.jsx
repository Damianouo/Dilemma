import { useCreationCtx } from "../../hooks/useCreationCtx";
import useModalCtx from "../../hooks/useModalCtx";
import { getCoverImageUrl } from "../../utils/entry";
import Button from "../UI/Button";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import FormTitle from "./FormTitle";
import PageButtons from "./PageButtons";
const EditEntries = () => {
  const { creation, handler } = useCreationCtx();
  const { editEntryRef, deleteEntryRef } = useModalCtx();
  const entries = creation.content.entries;
  const totalDisplayedEntries = 10;
  const startIndex = (creation.pageNum - 1) * totalDisplayedEntries;
  const endIndex = creation.pageNum * totalDisplayedEntries;
  const displayedEntries = entries.slice(startIndex, endIndex);

  function handleEdit(index) {
    editEntryRef.current.open();
    handler.startEditing(index);
  }
  function handleDelete(index) {
    deleteEntryRef.current.open();
    handler.startEditing(index);
  }
  return (
    <>
      <FormTitle>Edit all videos</FormTitle>
      <EditModal />
      <DeleteModal />
      {entries.length > 0 ? (
        <div className="flex flex-col gap-4 p-2 sm:p-4">
          {/* page buttons */}
          <PageButtons />

          <table className="border-primary-400 from-primary-800 to-primary-950 text-primary-200 border-collapse border-2 bg-linear-to-b text-xs md:text-base">
            <thead>
              <tr className="bg-primary-950 text-primary-100">
                <th scope="col">Order</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col" className="hidden sm:table-cell">
                  Link
                </th>
                <th scope="col">Edit/Delete</th>
              </tr>
            </thead>
            <tbody className="">
              {displayedEntries.map((entry, index) => (
                <tr key={entry.title + (index + startIndex)}>
                  <td className="text-center">{index + 1 + startIndex}</td>
                  <td className="w-[120px]">
                    <img src={getCoverImageUrl(entry.url)} alt="entry image" />
                  </td>
                  <td className="px-2">{entry.title}</td>
                  <td className="hidden px-2 sm:table-cell">{entry.url}</td>
                  <td className="p-2">
                    <div className="flex flex-col justify-center gap-2">
                      <Button
                        className="bg-secondary-500 hover:bg-secondary-400 bg-none p-1 text-xs text-white md:p-2"
                        onClick={() => handleEdit(index + startIndex)}
                      >
                        Edit
                      </Button>
                      <Button
                        className="bg-secondary-700 hover:bg-secondary-600 bg-none p-1 text-xs text-white md:p-2"
                        onClick={() => handleDelete(index + startIndex)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* page buttons */}
          <PageButtons />
        </div>
      ) : (
        <p className="p-4 md:p-8">No Entry added</p>
      )}
    </>
  );
};

export default EditEntries;
