/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Button from "../components/UI/Button";
import { Form, useActionData, useSubmit } from "react-router-dom";
import { useCreationCtx } from "../hooks/useCreationCtx";
import InfoUpload from "../components/createContest/InfoUpload";
import EditEntries from "../components/createContest/EditEntries";
import TabButtons from "../components/createContest/TabButtons";

const CreateContest = () => {
  const { creation, dispatch } = useCreationCtx();
  const { activeTab } = creation;
  const submit = useSubmit();
  const actionData = useActionData();
  if (actionData) console.log(actionData);

  useEffect(() => {
    const storedContent = localStorage.getItem("creationContent");
    if (storedContent) {
      const parsedContent = JSON.parse(storedContent);
      dispatch({
        type: "setState",
        payload: parsedContent,
      });
    }
  }, [dispatch]);

  useEffect(() => {
    if (creation.shouldSave) {
      localStorage.setItem("creationContent", JSON.stringify(creation.content));
    }
  }, [creation]);

  function handleSubmit() {
    submit(creation.content, {
      method: "post",
      encType: "application/json",
    });
  }
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col p-4 md:p-8">
      <TabButtons />
      {/* form */}
      <Form className="divide-y-2 divide-primary-500/60 bg-primary-400 pb-4 text-primary-700">
        {activeTab === "info" && <InfoUpload />}
        {activeTab === "edit" && <EditEntries />}
        <Button
          onClick={handleSubmit}
          className="mx-auto px-4 text-xl font-bold"
        >
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateContest;

export async function action({ request }) {
  const data = await request.json();
  const response = await fetch("http://localhost:8080/contest", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    return { successful: false, message: "could not create new contest" };
  }
  const responseData = await response.json();
  return {
    successful: true,
    message: "Creation successful!",
    id: responseData.savedContest._id,
  };
}
