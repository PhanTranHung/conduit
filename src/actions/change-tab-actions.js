export const CLICKED_TAG = "CLICKED_TAG";
export const REMOVE_CLICKED_TAG = "REMOVE_CLICKED_TAG";

export const initinalTab = {
  tab: "",
  key: "",
};

export const clickedTag = (tabName) => ({
  type: CLICKED_TAG,
  tab: tabName,
  key: tabName,
});
export const removeClickedTag = (tabName) =>
  Object.assign({}, initinalTab, { type: REMOVE_CLICKED_TAG });
