//@flow

type OtherComponentProps = {
  onAddItem: (string) => void,
};

export type ComponentProps = OtherComponentProps;
export type ComponentState = {
  value: string,
};
