//@flow
import { createStructuredSelector } from "reselect";
import type { ResultsCountSelectors } from "./types";
import { getDisplayedResultsCountState } from "components/Navigation/selectors";

export function mapStateToResultsCountProps(): ResultsCountSelectors {
  return createStructuredSelector({
    value: getDisplayedResultsCountState,
  });
}
