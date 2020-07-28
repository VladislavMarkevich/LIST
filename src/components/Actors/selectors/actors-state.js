//@flow
import { createSelector } from "reselect";

import type { ActorsState, ActorItemsByIds } from "kernel/types/reduxStore";

const emptyObject = {};
const emptyArray = [];

const getActorsState = (state): ActorsState => state.actors || emptyObject;

export const getResultsIdsState = createSelector(
  [getActorsState],
  (actorsState: ActorsState): $ReadOnlyArray<string> => {
    const { resultsIds = emptyArray } = actorsState;
    return resultsIds;
  }
);

export const getResultsByIdsState = createSelector([getActorsState], (actorsState: ActorsState): ActorItemsByIds => {
  const { resultsByIds = emptyObject } = actorsState;
  return resultsByIds;
});
