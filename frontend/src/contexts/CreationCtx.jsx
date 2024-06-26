/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const initialValue = {
  content: {
    title: "",
    description: "",
    totalParticipants: 32,
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
  },
  addEntry: {
    linkInput: "",
    loading: false,
    error: null,
  },
  updateEntry: {
    editingIndex: null,
    entryTitleInput: "",
    entryUrlInput: "",
    loading: false,
    error: null,
  },
  pageNum: 1,
  shouldSave: false,
};
export const CreationCtx = createContext();

const CreationCtxProvider = ({ children }) => {
  const [creation, dispatch] = useReducer(creationReducer, initialValue);

  return (
    <CreationCtx.Provider value={{ creation, dispatch }}>
      {children}
    </CreationCtx.Provider>
  );
};

export default CreationCtxProvider;

function creationReducer(creation, action) {
  switch (action.type) {
    case "setState": {
      return { ...creation, content: action.payload };
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
        },
      };
    }
    case "addEntryStart": {
      return {
        ...creation,
        shouldSave: false,
        addEntry: {
          ...creation.addEntry,
          loading: true,
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
          loading: false,
          error: null,
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
          loading: false,
          error: action.payload,
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
        },
      };
    }
    case "updateEntryStart": {
      return {
        ...creation,
        shouldSave: false,
        updateEntry: {
          ...creation.updateEntry,
          loading: true,
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
          editingIndex: null,
          entryTitleInput: "",
          entryUrlInput: "",
          loading: false,
          error: null,
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
          loading: false,
          error: action.payload,
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
    default: {
      throw new Error("unknown acion" + action.type);
    }
  }
}
