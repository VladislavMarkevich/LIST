//@flow
import { createActions } from "redux-actions";
import {
  NAVIGATION_CHANGE_DISPLAYED_RESULTS_COUNT,
  NAVIGATION_CHANGE_API_PATH,
  NAVIGATION_CHANGE_IS_BUSY,
} from "./actionTypes";

import type { Dispatch } from "kernel/types";

const { navigationChangeDisplayedResultsCount, navigationChangeApiPath, navigationChangeIsBusy } = createActions(
  NAVIGATION_CHANGE_DISPLAYED_RESULTS_COUNT,
  NAVIGATION_CHANGE_API_PATH,
  NAVIGATION_CHANGE_IS_BUSY
);

export const changeDisplayedResultsCount = (resultsCount: number) => (dispatch: Dispatch): void => {
  dispatch(navigationChangeDisplayedResultsCount({ resultsCount }));
};

export const changeApiPath = (apiPath: ?string) => (dispatch: Dispatch): void => {
  dispatch(navigationChangeApiPath({ nextPage: apiPath }));
};

export const changeIsBusy = (value: boolean) => (dispatch: Dispatch): void => {
  dispatch(navigationChangeIsBusy(value));
};
