/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { Form } from "react-router-dom";
import { twMerge as tm } from "tailwind-merge";
import ChevronLeftSvg from "../components/svgs/ChevronLeftSvg";
import ChevronRightSvg from "../components/svgs/ChevronRightSvg";
import { getCoverImageUrl } from "../utils/contest";
import { useCreationCtx } from "../hooks/useCreationCtx";

const CreateContest = () => {
  const [activeTab, setActiveTab] = useState("info");
  function handleChangeTab(tabName) {
    setActiveTab(tabName);
  }

  const { creation, handler } = useCreationCtx();

  useEffect(() => {
    const storedContent = localStorage.getItem("creationContent");
    if (storedContent) {
      const parsedContent = JSON.parse(storedContent);
      handler.setState(parsedContent);
    }
  }, []);

  useEffect(() => {
    if (creation.shouldSave) {
      localStorage.setItem("creationContent", JSON.stringify(creation.content));
    }
  }, [creation]);

  return (
    <div className="mx-auto flex max-w-[1200px] flex-col p-4 md:p-8">
      {/* tab button*/}
      <div className="flex ">
        <Button
          className={tm(
            "rounded-none text-sm md:text-base",
            activeTab === "info"
              ? "bg-primary-300"
              : "bg-primary-600 text-secondary-300",
          )}
          onClick={() => handleChangeTab("info")}
        >
          Info/Links Upload
        </Button>
        <Button
          className={tm(
            "rounded-none",
            activeTab === "edit"
              ? "bg-primary-300"
              : "bg-primary-600 text-secondary-300",
          )}
          onClick={() => handleChangeTab("edit")}
        >
          Edit Videos
        </Button>
      </div>
      {/* form */}
      <Form className="divide-y-2 divide-primary-500/60 bg-primary-400 pb-4 text-primary-700">
        {activeTab === "info" && <InfoUploadForm />}
        {activeTab === "edit" && <EditEntriesForm />}
      </Form>
    </div>
  );
};

export default CreateContest;

const InfoUploadForm = () => {
  const { creation, handler } = useCreationCtx();
  return (
    <>
      {/* info/upload form */}
      <FormFieldset>
        <FormTitle>Contest Information</FormTitle>
        <div className="flex flex-col divide-y-[1px] divide-primary-500/60 px-2 text-base md:px-8">
          <Input
            className="py-4 md:py-6"
            id="contestTitle"
            label="Title"
            value={creation.content.title}
            onChange={(e) => handler.titleChange(e)}
          />
          <Input
            className="py-4 md:py-6"
            id="contestDescription"
            label="Description"
            value={creation.content.description}
            onChange={(e) => handler.descriptionChange(e)}
          />
          <div className="flex items-center gap-6 py-4 md:py-6">
            <label htmlFor="totalEntries">Total Number of Entries</label>
            <select
              className="border-2 border-secondary-400 bg-primary-200 px-1 py-1 text-center transition-colors 
            focus-visible:border-secondary-600 focus-visible:outline-none"
              name="totalEntries"
              id="totalEntries"
              value={creation.content.totalParticipants}
              onChange={(e) => handler.participantsChange(e)}
            >
              <option value="256">256</option>
              <option value="128">128</option>
              <option value="64">64</option>
              <option value="32">32</option>
              <option value="16">16</option>
              <option value="8">8</option>
            </select>
          </div>
        </div>
      </FormFieldset>
      {/* video link */}
      <FormFieldset>
        <FormTitle>Video Links Upload</FormTitle>
        <div className="flex flex-col gap-2 px-2 py-4 md:flex-row md:items-center md:gap-4 md:px-8 md:py-6 ">
          <Input
            className="flex-1"
            id="videoLink"
            label="Link"
            value={creation.addEntry.linkInput}
            onChange={(e) => handler.linkChange(e)}
          />
          <Button
            className="self-start bg-primary-600 px-4 py-1 text-sm text-secondary-300 
          md:self-center md:text-base"
            disabled={creation.addEntry.loading}
            onClick={handler.addEntry}
          >
            Add
          </Button>
        </div>
        <p className="flex flex-col gap-2 px-2 py-2 text-xs md:px-8 md:py-4 md:text-base">
          <span>examples: </span>
          <span>https://www.youtube.com/watch?v=M7lc1UVf-VE</span>
        </p>
      </FormFieldset>
      <Button className="mx-auto px-4 text-xl font-bold">Create</Button>
    </>
  );
};

const EditEntriesForm = () => {
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

      <Button className="mx-auto px-4 text-xl font-bold">Create</Button>
    </>
  );
};

const FormFieldset = ({ children, className }) => {
  return (
    <fieldset className={tm("divide-y-[1px] divide-primary-500/60", className)}>
      {children}
    </fieldset>
  );
};

const FormTitle = ({ children, className }) => {
  return (
    <h2 className={tm("px-2 py-2 font-bold md:px-6 md:py-4", className)}>
      {children}
    </h2>
  );
};

const PageButtons = () => {
  const { creation, handler } = useCreationCtx();

  const totalEntries = creation.content.entries.length;
  const totalDisplayedEntries = 10;
  const totalPages = Math.ceil(totalEntries / totalDisplayedEntries);

  const pageButtonArr = [];
  if (totalEntries > 0) {
    for (let i = 1; i <= totalPages; i++) {
      pageButtonArr.push(i);
    }
  } else {
    pageButtonArr.push(1);
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        className="bg-secondary-600 px-6 text-primary-200"
        disabled={creation.pageNum === 1}
        onClick={handler.previousPage}
      >
        <ChevronLeftSvg />
      </Button>
      {pageButtonArr.map((pageNum) => (
        <Button
          className="h-10 w-10 bg-primary-300 "
          type="button"
          key={"pageButton" + pageNum}
          disabled={creation.pageNum === pageNum}
          onClick={() => handler.changePage(pageNum)}
        >
          {pageNum}
        </Button>
      ))}
      <Button
        className="bg-secondary-600 px-6 text-primary-200"
        disabled={creation.pageNum === totalPages}
        onClick={handler.nextPage}
      >
        <ChevronRightSvg />
      </Button>
    </div>
  );
};
