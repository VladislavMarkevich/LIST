//@flow
import {
  NAVIGATION_CHANGE_DISPLAYED_RESULTS_COUNT,
  NAVIGATION_CHANGE_API_PATH,
  NAVIGATION_CHANGE_IS_BUSY,
} from "./actionTypes";
import { handleActions } from "redux-actions";

import type { ReducerAction } from "kernel/types";
import type { NavigationState } from "kernel/types/reduxStore";

const defaultState = {
  displayedResultsCount: 10,
  nextPage: null,
  isBusy: false,
};

const navigation = handleActions(
  {
    [NAVIGATION_CHANGE_DISPLAYED_RESULTS_COUNT]: (
      state: NavigationState,
      action: ReducerAction<{ resultsCount: number }>
    ): NavigationState => {
      const { payload: { resultsCount = 0 } = {} } = action;
      return {
        ...state,
        displayedResultsCount: resultsCount,
      };
    },
    [NAVIGATION_CHANGE_API_PATH]: (state: NavigationState, action: ReducerAction<{ nextPage: string }>) => {
      const { payload: { nextPage = null } = {} } = action;
      return {
        ...state,
        nextPage,
      };
    },
    [NAVIGATION_CHANGE_IS_BUSY]: (state: NavigationState, action: ReducerAction<boolean>) => {
      const { payload: newIsBusy } = action;
      return {
        ...state,
        isBusy: newIsBusy,
      };
    },
  },
  defaultState
);
export default navigation;
