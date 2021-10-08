import React, { useCallback, useEffect, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import OpeningPopUp from "components/OpeningPopUp";
import { parse } from "query-string";

function Pages(): JSX.Element {
  const { search } = useLocation();

  const pages = useMemo(() => {
    const { pages } = parse(search);

    return typeof pages === "string" ? parseInt(pages, 10) : 1;
  }, [search]);

  const history = useHistory();

  const handleClickNext = useCallback(() => {
    history.push(`/?pages=${pages + 1}`);
  }, [history, pages]);

  const handleClickPrev = useCallback(() => {
    history.push(`/?pages=${pages - 1}`);
  }, [history, pages]);

  const enabledStart = useMemo(() => pages === 3, [pages]);

  useEffect(() => {
    window.document.title = "梅昆布茶会オンライン謎解き｜説明";
  }, []);

  return (
    <div>
      {console.log(useLocation())}
      {console.log(pages)}
      <OpeningPopUp
        enabledStart={enabledStart}
        onClickNext={handleClickNext}
        onClickPrev={handleClickPrev}
        pages={pages}
      />
    </div>
  );
}

export default Pages;
