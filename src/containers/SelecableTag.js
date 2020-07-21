import { connect } from "react-redux";
import { clickedTag } from "../actions/change-tab-actions";
import TagItem from "../components/layouts/TagItem";

const mapStateToProps = (state) => {
  // console.log(state);
  return { state: state.changeTab };
};
const mapDispatchToProps = (dispatch) => ({
  changeTab: (tag) => {
    // console.log(tag);
    return dispatch(clickedTag(tag));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(TagItem);
