//@flow
import { v4 as uuid } from "uuid";
import { createActions } from "redux-actions";
import { ACTORS_SAVE_SEARCH_RESULTS, ACTORS_REMOVE_ITEM, ACTORS_ADD_ITEM, ACTORS_EDIT_ITEM } from "./actionTypes";

import type { Dispatch } from "kernel/types";
import type { ActorItemsByIds } from "kernel/types/reduxStore";

const { actorsSaveSearchResults, actorsRemoveItem, actorsAddItem, actorsEditItem } = createActions(
  ACTORS_SAVE_SEARCH_RESULTS,
  ACTORS_REMOVE_ITEM,
  ACTORS_ADD_ITEM,
  ACTORS_EDIT_ITEM
);

export const saveSearchResults = (searchResults: $ReadOnlyArray<any>) => (dispatch: Dispatch) => {
  const resultIds: Array<string> = [];

  const correctedSearchResultsById: ActorItemsByIds = searchResults.reduce((result, actor) => {
    const { name = "" } = actor;
    const id = uuid();
    resultIds.push(id);
    result[id] = { id, name };
    return result;
  }, {});

  dispatch(actorsSaveSearchResults({ resultIds, resultsById: correctedSearchResultsById }));
};

export const addItem = (name: string) => (dispatch: Dispatch) => {
  const id = uuid();
  const newItem = { id, name };
  dispatch(actorsAddItem({ item: newItem }));
};

export const removeItem = (actorId: string) => (dispatch: Dispatch) => {
  dispatch(actorsRemoveItem({ actorId }));
};

export const editItem = (id: string, newName: string) => (dispatch: Dispatch) => {
  dispatch(actorsEditItem({ id, name: newName }));
};
