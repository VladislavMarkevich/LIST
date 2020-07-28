//@flow
import type { Selector } from "kernel/types";

type OtherComponentProps = {
  //mapDispatchProps
  onStartSearchProcess: (?string) => void,
};

type ResultSelector = {
  isVisible: boolean,
  nextPage: ?string,
  isBusy: boolean,
};

export type LoadMoreSelectors = Selector<OtherComponentProps, ResultSelector>;

export type ComponentProps = OtherComponentProps & ResultSelector;

export type ComponentState = {};
