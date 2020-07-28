//@flow
import type { Selector } from "kernel/types";

type OtherComponentProps = {
  //mapDispatchProps
  onChangeNavigationPage: (number) => void,
};

type ResultSelector = {
  pageNow: number,
  hasPrevious: boolean,
  hasNext: boolean,
};

export type NavigationSelectors = Selector<OtherComponentProps, ResultSelector>;

export type ComponentProps = OtherComponentProps & ResultSelector;

export type ComponentState = {};
