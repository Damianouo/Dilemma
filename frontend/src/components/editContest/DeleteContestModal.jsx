import { useActionData, useNavigate, useNavigation, useRouteLoaderData } from "react-router-dom";
import useModalCtx from "../../hooks/useModalCtx";
import Modal from "../UI/Modal";
import SuccessMessage from "../UI/SuccessMessage";
import ErrorMessage from "../UI/ErrorMessage";
import PendingMessage from "../UI/PendingMessage";
import Button from "../UI/Button";

const DeleteContestModal = () => {
  const user = useRouteLoaderData("root");
  const { deleteContestRef } = useModalCtx();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const actionData = useActionData();
  function handleClick() {
    if (actionData?.successful) {
      navigate(`/user/${user.info._id}`);
    }
    deleteContestRef.current?.close();
  }
  return (
    <Modal ref={deleteContestRef} onClose={deleteContestRef.current?.close}>
      <h2 className="text-3xl font-bold">Delete Contest</h2>
      <div className="w-[400px] py-8">
        {navigation.state === "idle" &&
          (actionData?.successful ? (
            <SuccessMessage>{actionData?.message}</SuccessMessage>
          ) : (
            <ErrorMessage>{actionData?.message}</ErrorMessage>
          ))}

        {(navigation.state === "loading" || navigation.state === "submitting") && (
          <PendingMessage>Deleting...</PendingMessage>
        )}
      </div>

      <Button
        onClick={handleClick}
        className="mx-auto font-bold"
        disabled={navigation.state !== "idle"}
      >
        Close
      </Button>
    </Modal>
  );
};

export default DeleteContestModal;
