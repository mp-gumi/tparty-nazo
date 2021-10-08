import LastComponent from "components/Last";
import React, { useEffect } from "react";

function Last(): JSX.Element {
  useEffect(() => {
    window.document.title = "梅昆布茶会オンライン謎解き｜最終問題";
  }, []);

  return <LastComponent />;
}

export default Last;
