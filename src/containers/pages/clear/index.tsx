import React, { useCallback, useEffect, useMemo } from "react";
import { useHistory, useLocation } from "react-router";
import ClearComponent from "components/Clear";
import { parse } from "query-string";

function Clear(): JSX.Element {
  const { pathname, search } = useLocation();

  const pages = useMemo(() => {
    const { pages } = parse(search);

    return typeof pages === "string" ? parseInt(pages, 10) : 1;
  }, [search]);

  const history = useHistory();

  const handleClickNext = useCallback(() => {
    history.push(`${pathname}?pages=${pages + 1}`);
  }, [history, pages, pathname]);

  const handleClickPrev = useCallback(() => {
    history.push(`${pathname}?pages=${pages - 1}`);
  }, [history, pages, pathname]);

  useEffect(() => {
    window.document.title = "梅昆布茶会オンライン謎解き｜クリア";
  }, []);

  return (
    <div>
      <ClearComponent
        onClickNext={handleClickNext}
        onClickPrev={handleClickPrev}
        pages={pages}
      />
    </div>
  );
}

export default Clear;
