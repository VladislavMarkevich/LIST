//@flow
import type { Selector } from "kernel/types";
import type { ActorItemsByIds } from "kernel/types/reduxStore";

type OtherComponentProps = {
  //mapDispatchToProps
  onRemoveItem: (string) => void,
  onEditItem: (string, string) => void,
};

type ResultSelector = {
  searchResultsByIds: ActorItemsByIds,
  searchResultIds: $ReadOnlyArray<string>,
};

export type ActorsSelectors = Selector<OtherComponentProps, ResultSelector>;

export type ComponentProps = OtherComponentProps & ResultSelector;

export type ComponentState = {};
