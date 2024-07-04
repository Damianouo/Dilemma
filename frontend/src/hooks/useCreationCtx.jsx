import { useContext } from "react";
import { CreationCtx } from "../contexts/CreationCtx";
import { getVideoTitle } from "../utils/entry";
import { updateValidation, uploadValidation } from "../utils/validation";

export const useCreationCtx = () => {
  const { creation, dispatch } = useContext(CreationCtx);

  function titleChange(e) {
    const title = e.target.value;
    dispatch({
      type: "titleChange",
      payload: title,
    });
  }
  function descriptionChange(e) {
    const description = e.target.value;
    dispatch({
      type: "descriptionChange",
      payload: description,
    });
  }
  function participantsChange(e) {
    const totalParticipants = +e.target.value;
    dispatch({
      type: "participantsChange",
      payload: totalParticipants,
    });
  }
  function linkChange(e) {
    const link = e.target.value;
    dispatch({
      type: "linkChange",
      payload: link,
    });
  }
  async function addEntry() {
    dispatch({ type: "addEntryStart" });
    const url = creation.addEntry.linkInput;
    const validationResult = uploadValidation(url);

    if (!validationResult.successful) {
      return dispatch({
        type: "addEntryError",
        payload: validationResult.message,
      });
    }

    try {
      const title = await getVideoTitle(url);
      dispatch({
        type: "addEntrySuccess",
        payload: { title, url },
      });
    } catch (error) {
      dispatch({
        type: "addEntryError",
        payload: error.message,
      });
    }
  }

  function deleteEntry(index) {
    dispatch({
      type: "deleteEntry",
      payload: index,
    });
  }
  function startEditing(index) {
    dispatch({
      type: "startEditing",
      payload: index,
    });
  }
  function entryTitleChange(e) {
    const title = e.target.value;
    dispatch({
      type: "entryTitleChange",
      payload: title,
    });
  }
  function entryUrlChange(e) {
    const url = e.target.value;
    dispatch({
      type: "entryUrlChange",
      payload: url,
    });
  }
  async function updateEntry() {
    dispatch({ type: "updateEntryStart" });
    const title = creation.updateEntry.entryTitleInput;
    const url = creation.updateEntry.entryUrlInput;

    const { editingIndex } = creation.updateEntry;
    const prevUrl = creation.content.entries[editingIndex].url;
    if (url === prevUrl) {
      return dispatch({
        type: "updateEntrySuccess",
        payload: { title, url },
      });
    }

    const validationResult = updateValidation(title, url);
    if (!validationResult.successful) {
      return dispatch({
        type: "updateEntryError",
        payload: validationResult.message,
      });
    }

    try {
      const title = await getVideoTitle(url);
      dispatch({
        type: "updateEntrySuccess",
        payload: { title, url },
      });
    } catch (error) {
      dispatch({
        type: "updateEntryError",
        payload: error.message,
      });
    }
  }
  function changePage(num) {
    dispatch({ type: "changePage", payload: num });
  }
  function previousPage() {
    dispatch({
      type: "changePage",
      payload: creation.pageNum - 1,
    });
  }
  function nextPage() {
    dispatch({
      type: "changePage",
      payload: creation.pageNum + 1,
    });
  }
  function changeTab(tabname) {
    dispatch({
      type: "changeTab",
      payload: tabname,
    });
  }
  const handler = {
    titleChange,
    descriptionChange,
    participantsChange,
    linkChange,
    addEntry,
    deleteEntry,
    startEditing,
    entryTitleChange,
    entryUrlChange,
    updateEntry,
    changePage,
    previousPage,
    nextPage,
    changeTab,
  };
  return { creation, handler, dispatch };
};
