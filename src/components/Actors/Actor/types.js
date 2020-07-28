//@flow

import type { ActorItem } from "kernel/types/reduxStore";

type OtherComponentProps = {
  onRemoveItem: (string) => void,
  onEditItem: (string, string) => void,
};

export type ComponentProps = ActorItem & OtherComponentProps;
export type ComponentState = {
  value: string,
  isEditMode: boolean,
};
