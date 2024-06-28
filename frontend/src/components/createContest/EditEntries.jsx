import { useCreationCtx } from "../../hooks/useCreationCtx";
import { getCoverImageUrl } from "../../utils/entry";
import Button from "../UI/Button";
import Input from "../UI/Input";
import FormTitle from "./FormTitle";
import PageButtons from "./PageButtons";
const EditEntries = () => {
  const { creation, handler } = useCreationCtx();
  const entries = creation.content.entries;
  const totalDisplayedEntries = 10;
  const startIndex = (creation.pageNum - 1) * totalDisplayedEntries;
  const endIndex = creation.pageNum * totalDisplayedEntries;
  const displayedEntries = entries.slice(startIndex, endIndex);
  return (
    <>
      <FormTitle>Edit all videos</FormTitle>
      {entries.length > 0 ? (
        <div className="flex flex-col gap-4 p-4">
          {/* page buttons */}
          <PageButtons />

          <table
            className="border-collapse border-2 border-primary-300
         bg-primary-600  text-primary-300"
          >
            <thead>
              <tr className="bg-primary-600">
                <th scope="col">Order</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Link</th>
                <th scope="col">Edit/Delete</th>
              </tr>
            </thead>
            <tbody className="text-base">
              {displayedEntries.map((entry, index) => (
                <tr key={entry.title + (index + startIndex)}>
                  <td className=" text-center">{index + 1 + startIndex}</td>
                  <td className="w-[120px] ">
                    <img src={getCoverImageUrl(entry.url)} alt="entry image" />
                  </td>
                  <td className="px-2">
                    {creation.updateEntry.editingIndex ===
                    index + startIndex ? (
                      <Input
                        className="text-sm"
                        type="text"
                        defaultValue={entry.title}
                        onChange={(e) => handler.entryTitleChange(e)}
                      />
                    ) : (
                      entry.title
                    )}
                  </td>
                  <td className="px-2">
                    {creation.updateEntry.editingIndex ===
                    index + startIndex ? (
                      <Input
                        className="text-sm"
                        type="text"
                        defaultValue={entry.url}
                        onChange={(e) => handler.entryUrlChange(e)}
                      />
                    ) : (
                      entry.url
                    )}
                  </td>
                  <td className="">
                    <div className="flex justify-center gap-2">
                      <Button
                        className=" bg-secondary-500 text-sm text-white"
                        disabled={creation.updateEntry.loading}
                        onClick={() =>
                          creation.updateEntry.editingIndex ===
                          index + startIndex
                            ? handler.updateEntry()
                            : handler.startEditing(index + startIndex)
                        }
                      >
                        {creation.updateEntry.editingIndex ===
                        index + startIndex
                          ? "Update"
                          : "Edit"}
                      </Button>
                      <Button
                        className=" bg-secondary-700 text-sm text-white"
                        disabled={creation.updateEntry.editingIndex}
                        onClick={() => handler.deleteEntry(index + startIndex)}
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
        <p className="p-4 md:p-8">No video added</p>
      )}
    </>
  );
};

export default EditEntries;
