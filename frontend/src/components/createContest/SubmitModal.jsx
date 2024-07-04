import useModalCtx from "../../hooks/useModalCtx";
import { useActionData, useNavigate, useNavigation } from "react-router-dom";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import SuccessMessage from "../UI/SuccessMessage";
import ErrorMessage from "../UI/ErrorMessage";
import PendingMessage from "../UI/PendingMessage";
import { useCreationCtx } from "../../hooks/useCreationCtx";
import { useEffect } from "react";

const SubmitModal = () => {
  const { creationSubmitRef } = useModalCtx();
  const { dispatch } = useCreationCtx();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const actionData = useActionData();
  useEffect(() => {
    if (actionData && actionData.successful) {
      dispatch({ type: "reset" });
      localStorage.removeItem("creationContent");
    }
  }, [actionData, dispatch, navigate]);

  function handleClick() {
    if (actionData?.successful) {
      navigate(`/contests/${actionData?.id}`);
    }
    creationSubmitRef.current.close();
  }
  return (
    <Modal ref={creationSubmitRef} onClose={creationSubmitRef.current?.close}>
      <h2 className="text-3xl font-bold">Create New Contest</h2>
      <div className="w-[400px] py-8">
        {navigation.state === "idle" &&
          (actionData?.successful ? (
            <SuccessMessage>{actionData?.message}</SuccessMessage>
          ) : (
            <ErrorMessage>{actionData?.message}</ErrorMessage>
          ))}

        {(navigation.state === "loading" ||
          navigation.state === "submitting") && (
          <PendingMessage>Creating ...</PendingMessage>
        )}
      </div>

      <Button
        onClick={handleClick}
        className="mx-auto font-bold"
        disabled={navigation.state !== "idle"}
      >
        {actionData?.successful ? "Go to contest page" : "Close"}
      </Button>
    </Modal>
  );
};

export default SubmitModal;
