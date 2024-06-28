import { useCreationCtx } from "../../hooks/useCreationCtx";
import Button from "../UI/Button";
import Input from "../UI/Input";
import FormTitle from "./FormTitle";
const InfoUpload = () => {
  const { creation, handler } = useCreationCtx();
  return (
    <>
      {/* info/upload form */}
      <fieldset className="divide-y-[1px] divide-primary-500/60">
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
      </fieldset>
      {/* video link */}
      <fieldset className="divide-y-[1px] divide-primary-500/60">
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
      </fieldset>
    </>
  );
};

export default InfoUpload;
