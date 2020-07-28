//@flow
import isEmpty from "lodash/isEmpty";
import { saveSearchResults } from "components/Actors/actions";
import { changeApiPath, changeIsBusy } from "components/Navigation/actions";

import type { Dispatch, GetState } from "kernel/types";
import { CallAPI } from "kernel/API";

export const startSearchProcess = (apiPath: ?string) => async (dispatch: Dispatch, getState: GetState) => {
  dispatch(changeIsBusy(true));
  const apiResult: { next?: string, results?: $ReadOnlyArray<any> } = await CallAPI(apiPath);
  if (isEmpty(apiResult)) {
    dispatch(changeIsBusy(false));
    return;
  }
  const { next, results: searchResults = [] } = apiResult;
  dispatch(saveSearchResults(searchResults));
  dispatch(changeApiPath(next));
  dispatch(changeIsBusy(false));
};
