import { useCreationCtx } from "../../hooks/useCreationCtx";
import Button from "../UI/Button";
import ErrorMessage from "../UI/ErrorMessage";
import Input from "../UI/Input";
import PendingMessage from "../UI/PendingMessage";
import SuccessMessage from "../UI/SuccessMessage";
import FormTitle from "./FormTitle";
const InfoUpload = () => {
  const { creation, handler } = useCreationCtx();
  return (
    <div className="divide-y-2 divide-primary-500/60">
      {/* info/upload form */}
      <fieldset>
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
              className="rounded-md border-2 border-primary-500 bg-primary-200 px-1 py-1 text-center text-primary-950 transition-colors 
            focus-visible:border-primary-950 focus-visible:outline-hidden"
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
      <fieldset>
        <FormTitle>Video Links Upload</FormTitle>
        <div className=" px-2 py-4 md:px-8 md:py-6 ">
          <Input
            className=""
            id="videoLink"
            label="Link"
            value={creation.addEntry.linkInput}
            onChange={(e) => handler.linkChange(e)}
          />
          <div className="mt-4 grid grid-cols-[75px_1fr_75px] ">
            <div className="col-[1_/_3] justify-self-center md:col-[2_/_3] md:justify-self-center">
              {creation.addEntry.state === "loading" && (
                <PendingMessage>Please wait ...</PendingMessage>
              )}
              {creation.addEntry.state === "error" && (
                <ErrorMessage>{creation.addEntry.errorMessage}</ErrorMessage>
              )}
              {creation.addEntry.state === "successful" && (
                <SuccessMessage>Upload successful!</SuccessMessage>
              )}
            </div>
            <Button
              className="col-start-3 self-center justify-self-end 
              bg-secondary-400 bg-none px-4 text-secondary-950 hover:bg-secondary-300"
              disabled={creation.addEntry.state === "loading"}
              onClick={handler.addEntry}
            >
              Add
            </Button>
          </div>
        </div>

        <p className="flex flex-col gap-2 px-2 py-2 text-xs md:px-8 md:py-4 md:text-base">
          <span>examples: </span>
          <span>https://www.youtube.com/watch?v=xKmEOXZsU_0</span>
          <span>https://www.youtube.com/shorts/PMIoaCzUYBY</span>
        </p>
      </fieldset>
    </div>
  );
};

export default InfoUpload;
