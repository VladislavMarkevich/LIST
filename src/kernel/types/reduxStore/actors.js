//@flow

export type ActorItem = {
  id: string,
  name: string,
};

export type ActorItemsByIds = { [string]: ActorItem };

export type ActorsState = {
  resultsIds: $ReadOnlyArray<string>,
  resultsByIds: ActorItemsByIds,
};
