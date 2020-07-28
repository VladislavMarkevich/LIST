//@flow
import { createSelector } from "reselect";
import type { NavigationState } from "kernel/types/reduxStore";

const emptyString = "";
const emptyObject = {};

const getNavigationState = (state): NavigationState => state.navigation || emptyObject;

export const getDisplayedResultsCountState: number = createSelector(
  [getNavigationState],
  (navigation: NavigationState) => {
    const { displayedResultsCount = 0 } = navigation;
    return displayedResultsCount;
  }
);

export const getNextPageState = createSelector([getNavigationState], (navigation: NavigationState) => {
  const { nextPage = emptyString } = navigation;
  return nextPage;
});

export const getIsBusyState = createSelector([getNavigationState], (navigation: NavigationState) => {
  const { isBusy = false } = navigation;
  return isBusy;
});
