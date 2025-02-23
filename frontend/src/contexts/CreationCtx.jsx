import { createContext, useReducer } from "react";
import { dummyContests } from "../dummyData";

const dummyEntries = dummyContests[0].entries;

const initialValue = {
  content: {
    title: "",
    description: "",
    totalParticipants: 32,
    category: "video",
    entries: dummyEntries.slice(0, 32),
  },
  addEntry: {
    linkInput: "",
    state: null,
    errorMessage: null,
  },
  updateEntry: {
    editingIndex: null,
    entryTitleInput: "",
    entryUrlInput: "",
    state: null,
    errorMessage: null,
  },
  pageNum: 1,
  shouldSave: false,
  activeTab: "info",
};
export const CreationCtx = createContext();

const CreationCtxProvider = ({ children }) => {
  const [creation, dispatch] = useReducer(creationReducer, initialValue);

  return <CreationCtx.Provider value={{ creation, dispatch }}>{children}</CreationCtx.Provider>;
};

export default CreationCtxProvider;

function creationReducer(creation, action) {
  switch (action.type) {
    case "setState": {
      return { ...creation, content: action.payload };
    }
    case "reset": {
      return initialValue;
    }
    case "titleChange": {
      return {
        ...creation,
        shouldSave: true,
        content: {
          ...creation.content,
          title: action.payload,
        },
      };
    }
    case "descriptionChange": {
      return {
        ...creation,
        shouldSave: true,
        content: {
          ...creation.content,
          description: action.payload,
        },
      };
    }
    case "participantsChange": {
      return {
        ...creation,
        shouldSave: true,
        content: {
          ...creation.content,
          totalParticipants: action.payload,
        },
      };
    }
    case "linkChange": {
      return {
        ...creation,
        shouldSave: false,
        addEntry: {
          ...creation.addEntry,
          linkInput: action.payload,
          state: null,
          errorMessage: null,
        },
      };
    }
    case "addEntryStart": {
      return {
        ...creation,
        shouldSave: false,
        addEntry: {
          ...creation.addEntry,
          state: "loading",
        },
      };
    }
    case "addEntrySuccess": {
      return {
        ...creation,
        shouldSave: true,
        addEntry: {
          ...creation.addEntry,
          linkInput: "",
          state: "successful",
        },
        content: {
          ...creation.content,
          entries: [...creation.content.entries, action.payload],
        },
      };
    }
    case "addEntryError": {
      return {
        ...creation,
        shouldSave: false,
        addEntry: {
          ...creation.addEntry,
          state: "error",
          errorMessage: action.payload,
        },
      };
    }
    case "deleteEntry": {
      const entries = creation.content.entries;
      const updatedEntries = entries.toSpliced(action.payload, 1);
      return {
        ...creation,
        shouldSave: true,
        content: {
          ...creation.content,
          entries: updatedEntries,
        },
      };
    }
    case "startEditing": {
      const index = action.payload;
      const targetEntry = creation.content.entries[index];
      return {
        ...creation,
        shouldSave: false,
        updateEntry: {
          ...creation.updateEntry,
          editingIndex: index,
          entryTitleInput: targetEntry.title,
          entryUrlInput: targetEntry.url,
          state: null,
        },
      };
    }
    case "entryTitleChange": {
      return {
        ...creation,
        shouldSave: false,
        updateEntry: {
          ...creation.updateEntry,
          entryTitleInput: action.payload,
          state: null,
        },
      };
    }
    case "entryUrlChange": {
      return {
        ...creation,
        shouldSave: false,
        updateEntry: {
          ...creation.updateEntry,
          entryUrlInput: action.payload,
          state: null,
        },
      };
    }
    case "updateEntryStart": {
      return {
        ...creation,
        shouldSave: false,
        updateEntry: {
          ...creation.updateEntry,
          state: "loading",
        },
      };
    }
    case "updateEntrySuccess": {
      const entries = creation.content.entries;
      const index = creation.updateEntry.editingIndex;
      const UpdatedEntries = entries.toSpliced(index, 1, action.payload);
      return {
        ...creation,
        shouldSave: true,
        updateEntry: {
          ...creation.updateEntry,
          state: "successful",
          entryTitleInput: action.payload.title,
        },
        content: {
          ...creation.content,
          entries: UpdatedEntries,
        },
      };
    }
    case "updateEntryError": {
      return {
        ...creation,
        shouldSave: false,
        updateEntry: {
          ...creation.updateEntry,
          state: "error",
          errorMessage: action.payload,
        },
      };
    }
    case "changePage": {
      return {
        ...creation,
        shouldSave: false,
        pageNum: action.payload,
      };
    }
    case "changeTab": {
      return {
        ...creation,
        shouldSave: false,
        activeTab: action.payload,
      };
    }
    default: {
      throw new Error("unknown acion" + action.type);
    }
  }
}
