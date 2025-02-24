import { useEffect } from "react";
import Button from "../components/UI/Button";
import { Form, Navigate, useRouteLoaderData, useSubmit } from "react-router-dom";
import { useCreationCtx } from "../hooks/useCreationCtx";
import InfoUpload from "../components/createContest/InfoUpload";
import EditEntries from "../components/createContest/EditEntries";
import TabButtons from "../components/createContest/TabButtons";
import SubmitModal from "../components/createContest/SubmitModal";
import useModalCtx from "../hooks/useModalCtx";
import { creationValidation } from "../utils/validation";

const CreateContest = () => {
  const isLogin = useRouteLoaderData("root");
  const { creation, dispatch } = useCreationCtx();
  const { creationSubmitRef } = useModalCtx();
  const { activeTab } = creation;
  const submit = useSubmit();

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

  function handleReset() {
    localStorage.removeItem("creationContent");
    dispatch({
      type: "reset",
    });
  }

  function handleSubmit() {
    submit(creation.content, {
      method: "post",
      encType: "application/json",
    });
    creationSubmitRef.current.open();
  }

  return isLogin ? (
    <div className="mx-auto flex max-w-[1200px] flex-col p-4 text-base md:p-8 md:text-xl">
      <SubmitModal />
      <TabButtons />
      {/* form */}
      <Form className="from-primary-700 to-primary-900 text-primary-100 bg-linear-to-b">
        {activeTab === "info" && <InfoUpload />}
        {activeTab === "edit" && <EditEntries />}
        <div className="flex justify-center gap-4 py-8">
          <Button onClick={handleReset} className="px-4 text-xl font-bold">
            Reset
          </Button>
          <Button onClick={handleSubmit} className="px-4 text-xl font-bold">
            Create
          </Button>
        </div>
      </Form>
    </div>
  ) : (
    <Navigate to="/login?from=create" replace={true} />
  );
};

export default CreateContest;

export async function action({ request }) {
  const data = await request.json();
  const validationResult = creationValidation(
    data.title,
    data.description,
    data.totalParticipants,
    data.entries.length,
  );
  if (!validationResult.successful) {
    return validationResult;
  }

  const response = await fetch("http://localhost:8080/contest", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    return {
      successful: false,
      message: "Could not create new contest, please try again later.",
    };
  }
  const responseData = await response.json();
  return {
    successful: true,
    message: "Creation successful!",
    id: responseData.savedContest._id,
  };
}
