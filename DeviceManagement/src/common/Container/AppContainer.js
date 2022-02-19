import { connect } from "react-redux";
import { compose } from "recompose";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import * as actions from "../../API/actions"
import { deviceListSelector } from "../../API/selector";

export const mapStateToProps = createStructuredSelector({
  deviceListSelector: deviceListSelector()
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getTodaysQuote: actions.getTodaysQuote,
      removeDevice: actions.removeDevice,
      updateAppData: actions.updateAppData,
      updateDeviceList: actions.updateDeviceList
    },
    dispatch,
  );
}

const container = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);

export default container;
