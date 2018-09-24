import * as React from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import actionCreators, { Actions } from "../../store/actions";
import { State } from "../../store/reducer";
import { HomeWrapper, ErrorWrapper } from "./styles";
import DecodedDisplay from "../../components/DecodedDisplay";
import NumericodeInput from "../../components/NumericodeInput";

type Props = Actions & State;

class Home extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.fetchNumericode();
  }

  render() {
    const { decoded, error, numericode, handleInputChange, errorDecoding, isLoading } = this.props;
    return (
      <HomeWrapper>
        <DecodedDisplay
          decoded={decoded}
          error={error}
        />
        <NumericodeInput
          numericode={numericode}
          handleInputChange={handleInputChange}
          errorDecoding={errorDecoding}
          isLoading={isLoading}
        />
        <ErrorWrapper>{error}</ErrorWrapper>
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (s: State) => ({
  numericode: s.numericode,
  decoded: s.decoded,
  isLoading: s.isLoading,
  error: s.error
});

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators({
    handleInputChange: actionCreators.handleInputChange,
    decodedResult: actionCreators.decodedResult,
    errorDecoding: actionCreators.errorDecoding,
    fetchNumericode: actionCreators.fetchNumericode
  }, dispatch);

export default connect<State, Actions>(mapStateToProps, mapDispatchToProps as any)(Home);