import { connect } from "react-redux";
import { clickedTab } from "../actions/change-tab-actions";
import Activities from "../components/layouts/Activities";

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  // console.log(ownProps);
  return { state: { changeTab: state.changeTab, login: state.login } };
};
// const mapDispatchToProps = (dispatch) => ({
//   clickedTab: (tag) => {
//     // console.log(tag);
//     return dispatch(clickedTab(tag));
//   },
// });

export default connect(mapStateToProps, { clickedTab })(Activities);
