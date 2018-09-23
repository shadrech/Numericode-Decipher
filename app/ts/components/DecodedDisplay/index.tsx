import * as React from "react";

import { State } from "../../store/reducer";
import { DisplayWrapper } from "./styles";

type Props = Pick<State, "decoded" | "error">;

const DecodedDisplay: React.SFC<Props> = ({decoded, error}: Props) => (
  <DisplayWrapper>
    {decoded}
  </DisplayWrapper>
);

export default DecodedDisplay;