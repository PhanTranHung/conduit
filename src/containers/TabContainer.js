import { connect } from "react-redux";
import { removeClickedTag } from "../actions/change-tab-actions";
import Activities from "../components/layouts/Activities";

const mapStateToProps = (state) => {
  // console.log(state);
  return { state };
};
const mapDispatchToProps = (dispatch) => ({
  removeThisTab: (tag) => {
    // console.log(tag);
    return dispatch(removeClickedTag(tag));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
