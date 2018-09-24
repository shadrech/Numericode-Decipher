import * as React from "react";

import { Input, Wrapper, IconWrapper, LoaderWrapper } from "./styles";
import { LockIcon } from "../svgs";
import { Actions } from "../../store/actions";
import { State } from "../../store/reducer";
const loader = require("../../assets/loader.gif");

type Props = Pick<State, "numericode" | "isLoading"> & Pick<Actions, "handleInputChange" | "errorDecoding">

const NumericodeInput: React.SFC<Props> = (props: Props) => {
  const handleInputChange = (evt: any) => {
    if (/[a-zA-Z-!$%^&*()_+|~=@£\\`{}\[\]:";'<>?,.\/]/.test(evt.target.value)) {
      props.errorDecoding("Numericode must be a number");
    } else {
      props.handleInputChange(evt.target.value);
    }
  }

  return (
    <Wrapper>
      <Input
        onChange={handleInputChange}
        value={props.numericode}
      />
      <IconWrapper>
        <LockIcon />
      </IconWrapper>
      {props.isLoading && <LoaderWrapper src={loader} />}
    </Wrapper>
  );
}

export default NumericodeInput;
