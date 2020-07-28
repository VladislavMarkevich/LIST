//@flow
import type { Selector } from "kernel/types";

type OtherComponentProps = {
  //mapDispatchProps
  onChangeDisplayedResultsCount: (number) => void,
};

type ResultSelector = {
  value: number,
};

export type ResultsCountSelectors = Selector<OtherComponentProps, ResultSelector>;

export type ComponentProps = OtherComponentProps & ResultSelector;

export type ComponentState = {
  value: string,
  isEditMode: boolean,
};
