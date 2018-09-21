import * as React from "react";

import { Input, Wrapper, IconWrapper } from "./styles";
import { LockIcon } from "../svgs";
import { Actions } from "../../store/actions";
import { State } from "../../store/reducer";

type Props = Pick<State, "numericode"> & Pick<Actions, "handleNumericodeInput">

const NumericodeInput: React.SFC<Props> = (props: Props) => {
  const handleKeyUp = (evt: any) => {
    console.log(evt);
    props.handleNumericodeInput(evt.key);
  }

  return (
    <Wrapper>
      <Input
        onChange={handleKeyUp}
        onKeyUp={handleKeyUp}
        value={props.numericode}
      />
      <IconWrapper>
        <LockIcon />
      </IconWrapper>
    </Wrapper>
  );
}

export default NumericodeInput;
