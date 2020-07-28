//@flow
import { createStructuredSelector, createSelector } from "reselect";
import { getDisplayedResultsCountState } from "components/Navigation/selectors";
import { getResultsIdsState, getResultsByIdsState } from "./actors-state";

import type { ActorsSelectors } from "../types";
import type { ActorItemsByIds } from "kernel/types/reduxStore";
export * from "./actors-state";

export function mapStateToActorsProps(): ActorsSelectors {
  const getSearchResultIds = createSelector(
    [getDisplayedResultsCountState, getResultsIdsState],
    (displayedResultsCount: number, resultsIds: $ReadOnlyArray<string>): $ReadOnlyArray<string> => {
      const results = resultsIds.slice(0, displayedResultsCount);
      return results;
    }
  );

  const getSearchResultsByIds = createSelector(
    [getResultsByIdsState, getSearchResultIds],
    (resultsByIds: ActorItemsByIds, searchResultIds: $ReadOnlyArray<string>): ActorItemsByIds => {
      return searchResultIds.reduce((result, id) => {
        result[id] = resultsByIds[id];
        return result;
      }, {});
    }
  );

  return createStructuredSelector({
    searchResultsByIds: getSearchResultsByIds,
    searchResultIds: getSearchResultIds,
  });
}
