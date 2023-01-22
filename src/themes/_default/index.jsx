// LIBs
import { connect } from "react-redux";

// TEMPLATEs
import HeaderDefault from "../../templates/_default/Header";
import MainDefault from "../../templates/_default/Main";
import FooterDefault from "../../templates/_default/Footer";

// SELECTORs
import { modeApp } from "../../core/reducers/AppReducer/selectors";

const _default = props => (
  <div className={`DefaultTheme ${props.mode}`}>
    <HeaderDefault mode={props.mode} />
    <MainDefault mode={props.mode} >{props.children}</MainDefault>
    <FooterDefault mode={props.mode} />
  </div>
);

const mapStateToProps = state => ({
  mode: modeApp(state),
});

export default connect(mapStateToProps)(_default);