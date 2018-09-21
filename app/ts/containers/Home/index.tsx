import * as React from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import actionCreators, { Actions } from "../../store/actions";
import { State } from "../../store/reducer";
import { HomeWrapper } from "./styles";
import DecodedDisplay from "../../components/DecodedDisplay";
import NumericodeInput from "../../components/NumericodeInput";

type Props = Actions & State;

const Home: React.SFC<Props>  = (props: Props) => (
  <HomeWrapper>
    <DecodedDisplay
      decoded={props.decoded}
      error={props.error}
    />
    <NumericodeInput
      numericode={props.numericode}
      handleNumericodeInput={props.handleNumericodeInput}
    />
  </HomeWrapper>
);

const mapStateToProps = (s: State) => ({
  numericode: s.numericode,
  decoded: s.decoded,
  isLoading: s.isLoading,
  error: s.error
});

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators({
    handleNumericodeInput: actionCreators.handleNumericodeInput,
    decodedResult: actionCreators.decodedResult,
    errorDecoding: actionCreators.errorDecoding,
  }, dispatch);

export default connect<State, Actions>(mapStateToProps, mapDispatchToProps as any)(Home);