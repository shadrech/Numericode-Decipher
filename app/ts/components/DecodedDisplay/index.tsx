import * as React from "react";

import { State } from "../../store/reducer";

type Props = Pick<State, "decoded" | "error">;

const DecodedDisplay: React.SFC<Props> = (props: Props) => (
  <div></div>
);

export default DecodedDisplay;