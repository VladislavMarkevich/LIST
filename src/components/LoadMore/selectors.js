//@flow
import { createStructuredSelector, createSelector } from "reselect";
import { getNextPageState, getIsBusyState } from "components/Navigation/selectors";

import type { LoadMoreSelectors } from "./types";

export function mapStateToLoadMoreProps(): LoadMoreSelectors {
  const getIsVisible: boolean = createSelector([getNextPageState], (nextPage: ?string) => {
    return Boolean(nextPage);
  });

  return createStructuredSelector({
    isVisible: getIsVisible,
    nextPage: getNextPageState,
    isBusy: getIsBusyState,
  });
}
