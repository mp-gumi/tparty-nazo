import LastComponent, { LastProps } from "components/Last";
import React, { useCallback, useEffect, useMemo } from "react";
import { useHistory } from "react-router";

function Last(): JSX.Element {
  const question = useMemo(() => ({ answer: "clear" }), []);
  const { answer } = useMemo(() => question, [question]);
  const history = useHistory();
  const handleSubmit = useCallback<LastProps["onSubmit"]>(
    ({ answer: useAnswer }) => {
      if (answer !== useAnswer) {
        // TODO
        return;
      }
      history.push("/clear");
    },
    [answer, history]
  );

  useEffect(() => {
    window.document.title = "梅昆布茶会オンライン謎解き｜最終問題";
  }, []);

  return <LastComponent onSubmit={handleSubmit} answer={answer} />;
}

export default Last;
