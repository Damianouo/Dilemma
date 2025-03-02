import { Navigate, useLoaderData, useRouteLoaderData, useSubmit } from "react-router-dom";
import TabButtons from "../components/createContest/TabButtons";
import ContestForm from "../components/createContest/ContestForm";
import Button from "../components/UI/Button";
import { useCreationCtx } from "../hooks/useCreationCtx";
import { useEffect, useMemo } from "react";
import UpdateContestModal from "../components/editContest/UpdateContestModal";
import useModalCtx from "../hooks/useModalCtx";
import DeleteContestModal from "../components/editContest/DeleteContestModal";

const Edit = () => {
  const contest = useLoaderData();
  const user = useRouteLoaderData("root");
  const submit = useSubmit();
  const { creation, dispatch } = useCreationCtx();
  const { updateContestRef, deleteContestRef } = useModalCtx();
  const isArthor = user?.info._id === contest?.author._id;
  const contestContent = useMemo(() => {
    if (!contest) return null;
    const { title, description, totalParticipants, category, entries } = contest;
    return { title, description, totalParticipants, category, entries };
  }, [contest]);

  useEffect(() => {
    if (contestContent) {
      dispatch({ type: "setState", payload: contestContent });
    }
  }, [contestContent, dispatch]);

  const handleDeleteContest = () => {
    deleteContestRef.current?.open();
    submit({ contestId: contest._id }, { method: "DELETE", encType: "application/json" });
  };

  const handleEditContest = () => {
    submit(
      { userId: user.info._id, contestId: contest._id, contestContent: creation.content },
      { method: "PATCH", encType: "application/json" },
    );
    updateContestRef.current?.open();
  };

  return user?.isLogin && isArthor ? (
    <div className="mx-auto flex max-w-[1200px] flex-col p-2 text-base md:p-8 md:text-xl">
      <DeleteContestModal />
      <UpdateContestModal />
      <TabButtons />
      <ContestForm>
        <div className="flex justify-center gap-4 py-8">
          <Button onClick={handleDeleteContest} className="font-bold md:px-4 md:text-xl">
            Delete Contest
          </Button>
          <Button onClick={handleEditContest} className="font-bold md:px-4 md:text-xl">
            Update Contest
          </Button>
        </div>
      </ContestForm>
    </div>
  ) : (
    <Navigate to="/" replace={true} />
  );
};

export default Edit;
