import { connect } from "react-redux";
import { removeClickedTag } from "../actions/change-tab-actions";
import Activities from "../components/layouts/Activities";

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  // console.log(ownProps);
  return { state: state.changeTab };
};
const mapDispatchToProps = (dispatch) => ({
  removeThisTab: (tag) => {
    // console.log(tag);
    return dispatch(removeClickedTag(tag));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
