//@flow
import type { NavigationState } from "./navigation";
import type { ActorsState } from "./actors";
export * from "./navigation";
export * from "./actors";

export type ReduxStore = {
  actors: ActorsState,
  navigation: NavigationState,
};
