//@flow
import { ACTORS_SAVE_SEARCH_RESULTS, ACTORS_REMOVE_ITEM, ACTORS_ADD_ITEM, ACTORS_EDIT_ITEM } from "./actionTypes";
import { handleActions } from "redux-actions";
import update from "immutability-helper";

import type { ReducerAction } from "kernel/types";
import type { ActorsState, ActorItemsByIds, ActorItem } from "kernel/types/reduxStore";

const defaultState = {
  resultsIds: [],
  resultsByIds: {},
};

const actors = handleActions(
  {
    [ACTORS_SAVE_SEARCH_RESULTS]: (
      state: ActorsState,
      action: ReducerAction<{ resultIds: $ReadOnlyArray<string>, resultsById: ActorItemsByIds }>
    ): ActorsState => {
      const { resultsIds: nowResultsIds = [], resultsByIds: nowResultsByIds = {} } = state;

      const { payload: { resultIds = [], resultsById = {} } = {} } = action;
      const newResultsIds = nowResultsIds.concat(resultIds);
      const newResultsByIds = update(nowResultsByIds, { $merge: resultsById });

      return {
        ...state,
        resultsIds: newResultsIds,
        resultsByIds: newResultsByIds,
      };
    },
    [ACTORS_REMOVE_ITEM]: (state: ActorsState, action: ReducerAction<{ actorId: string }>): ActorsState => {
      const { resultsIds: nowResultsIds = [], resultsByIds: nowResultsByIds = {} } = state;

      const { payload: { actorId = "" } = {} } = action;

      const newResultsIds = nowResultsIds.filter((it) => it !== actorId);

      const newResultsByIds = newResultsIds.reduce((result, id) => {
        result[id] = nowResultsByIds[id];
        return result;
      }, {});

      return {
        ...state,
        resultsIds: newResultsIds,
        resultsByIds: newResultsByIds,
      };
    },
    [ACTORS_ADD_ITEM]: (state: ActorsState, action: ReducerAction<{ item: ActorItem }>): ActorsState => {
      const { resultsIds: nowResultsIds = [], resultsByIds: nowResultsByIds = {} } = state;

      const { payload: { item = {} } = {} } = action;
      const { id = "" } = item;

      const newResultsByIds = update(nowResultsByIds, { $merge: { [id]: item } });

      const newResultsIds = [...nowResultsIds];
      newResultsIds.splice(0, 0, id);

      return {
        ...state,
        resultsIds: newResultsIds,
        resultsByIds: newResultsByIds,
      };
    },
    [ACTORS_EDIT_ITEM]: (state: ActorsState, action: ReducerAction<ActorItem>) => {
      const { resultsByIds: nowResultsByIds = {} } = state;

      const { payload: { id = "", name = "" } = {} } = action;

      const forUpdate = { [id]: { id, name } };

      const newResultsByIds = update(nowResultsByIds, { $merge: forUpdate });
      return {
        ...state,
        resultsByIds: newResultsByIds,
      };
    },
  },
  defaultState
);
export default actors;
