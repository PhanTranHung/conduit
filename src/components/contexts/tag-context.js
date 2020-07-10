import React, { useReducer } from "react";

export const initinalTag = {
  tab: "",
  key: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CLICKED_TAG":
      return { tab: action.payload.tab, key: action.payload.key };
    case "REMOVE_CLICKED_TAG":
      return initinalTag;
    default:
      throw new Error("No action type");
  }
};

export const TagContext = React.createContext();
export const TagContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initinalTag);

  return (
    <TagContext.Provider value={[state, dispatch]}>
      {props.children}
    </TagContext.Provider>
  );
};

// export const function
