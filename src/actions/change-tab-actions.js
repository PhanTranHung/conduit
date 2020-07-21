export const CLICKED_TAG = "CLICKED_TAG";
export const REMOVE_CLICKED_TAG = "REMOVE_CLICKED_TAG";
export const LET_IT_PASS = "LET_IT_PASS";

export const initinalTab = {
  tab: "global",
  key: "global",
};

export const clickedTag = (tabName) => ({
  type: CLICKED_TAG,
  tab: tabName,
  key: tabName,
});
export const clickedTab = (tabName) =>
  tabName === "your"
    ? { type: LET_IT_PASS, tabName }
    : { type: LET_IT_PASS, tabName: "global" };
