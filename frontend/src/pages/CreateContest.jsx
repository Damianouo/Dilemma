/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { Form } from "react-router-dom";
import { twMerge as tm } from "tailwind-merge";

const dummy = {
  _id: "1",
  category: "video",
  totalParticipants: 16,
  title: "Music video from kpop girls group world cup(Top 16)",
  description: `Choose your favorite music video from kpop girls group!`,
  entries: [
    {
      title: "Nmixx-O.O",
      url: "https://www.youtube.com/watch?v=3GWscde8rM8",
      winCount: 12,
    },
    {
      title: "ITZY-LOCO",
      url: "https://www.youtube.com/watch?v=MjCZfZfucEc",
      winCount: 10,
    },
    {
      title: "LE SSERAFIM-ANTIFRAGILE",
      url: "https://www.youtube.com/watch?v=pyf8cbqyfPs",
      winCount: 0,
    },
    {
      title: "(G)I-DLE-QueenCard",
      url: "https://www.youtube.com/watch?v=7HDeem-JaSY",
      winCount: 6,
    },
    {
      title: "NewJeans-Super Shy",
      url: "https://www.youtube.com/watch?v=ArmDp-zijuc",
      winCount: 5,
    },
    {
      title: "IVE-I AM",
      url: "https://www.youtube.com/watch?v=6ZUIwj3FgUY",
      winCount: 3,
    },
    {
      title: "aespa-Drama",
      url: "https://www.youtube.com/watch?v=D8VEhcPeSlc",
      winCount: 5,
    },
    {
      title: "STAYC-ASAP",
      url: "https://www.youtube.com/watch?v=NsY-9MCOIAQ",
      winCount: 7,
    },
    {
      title: "Dreamcatcher-BONVOYAGE",
      url: "https://www.youtube.com/watch?v=RPNaYj6etb8",
      winCount: 1,
    },
    {
      title: "TWICE-SET ME FREE",
      url: "https://www.youtube.com/watch?v=w4cTYnOPdNk",
      winCount: 2,
    },
    {
      title: "XG-GRL GVNG",
      url: "https://www.youtube.com/watch?v=Xiai4BRzZpU",
      winCount: 0,
    },
    {
      title: "PURPLE KISS-Sweet Juice",
      url: "https://www.youtube.com/watch?v=WFqGKa6p1V8",
      winCount: 1,
    },
    {
      title: "BADVILLAIN-BADVILLAIN",
      url: "https://www.youtube.com/watch?v=WpFuv7Q0VBo",
      winCount: 9,
    },
    {
      title: "ILLIT-Magnetic",
      url: "https://www.youtube.com/watch?v=Vk5-c_v4gMU",
      winCount: 2,
    },
    {
      title: "BABYMONSTER-SHEESH",
      url: "https://www.youtube.com/watch?v=2wA_b6YHjqQ",
      winCount: 8,
    },
    {
      title: "KISS OF LIFE-Midas Touch",
      url: "https://www.youtube.com/watch?v=oKVYm8mIUdo",
      winCount: 10,
    },
  ],
};
const CreateContest = () => {
  const [activeTab, setActiveTab] = useState("info");
  function handleChangeTab(tabName) {
    setActiveTab(tabName);
  }
  return (
    <div className="mx-auto flex max-w-[1000px] flex-col p-4 md:p-8">
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
      {activeTab === "info" && <InfoUploadForm />}
      {activeTab === "edit" && <EditEntriesForm />}
    </div>
  );
};

export default CreateContest;

const InfoUploadForm = () => {
  return (
    <FormContainer>
      {/* info/upload form */}
      <FormFieldset>
        <FormTitle>Contest Information</FormTitle>
        <div className="flex flex-col divide-y-[1px] divide-primary-500/60 px-2 text-base md:px-8">
          <Input className="py-4 md:py-6" id="contestTitle" label="Title" />
          <Input
            className="py-4 md:py-6"
            id="contestDescription"
            label="Description"
          />
          <div className="flex items-center gap-6 py-4 md:py-6">
            <label htmlFor="totalEntries">Total Number of Entries</label>
            <select
              className="border-2 border-secondary-400 bg-primary-200 px-2 py-1  text-primary-700
            focus-visible:border-secondary-600 focus-visible:outline-none"
              defaultValue={32}
              name="totalEntries"
              id="totalEntries"
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
        <div
          className="flex flex-col gap-2 divide-y-[1px] divide-primary-500/60 px-2 
       md:flex-row md:items-center md:gap-4 md:px-8 "
        >
          <Input
            className="flex-1 py-4 md:py-6"
            id="videoLink"
            label="Link"
            onBlur={() => console.log("blur")}
          />
          <Button className="self-start bg-primary-600 px-4 py-1 text-sm text-secondary-300 md:self-center md:text-base">
            Add
          </Button>
        </div>
        <p className="flex flex-col gap-2 px-2 py-2 text-xs text-primary-600 md:px-8 md:py-4 md:text-base">
          <span>examples: </span>
          <span>https://www.youtube.com/watch?v=M7lc1UVf-VE</span>
          <span>https://youtu.be/M7lc1UVf-VE</span>
          <span>https://www.youtube.com/shorts/TB-Q5G8whLc</span>
        </p>
      </FormFieldset>
      <Button className="mx-auto bg-primary-300 px-4">Create</Button>
    </FormContainer>
  );
};

const EditEntriesForm = () => {
  return (
    <FormContainer className="divide-y-2 divide-primary-500/60 bg-primary-400 pb-4 text-primary-700">
      <FormTitle>Edit all videos</FormTitle>
    </FormContainer>
  );
};

const FormContainer = ({ children, className }) => {
  return (
    <Form
      className={tm(
        "divide-y-2 divide-primary-500/60 bg-primary-400 pb-4 text-primary-700",
        className,
      )}
    >
      {children}
    </Form>
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
