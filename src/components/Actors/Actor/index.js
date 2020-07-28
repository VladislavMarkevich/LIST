//@flow
import * as React from "react";
import isEmpty from "lodash/isEmpty";
import enhanceWithClickOutside from "react-click-outside";
import type { ComponentProps as Props, ComponentState as State } from "./types.js";

import { ActorContainer, DisplayValueContainer, InputContainer, RemoveIcon } from "./styled";
class Actor extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: props.name,
      isEditMode: false,
    };
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    const { name: valueProps = 0 } = props;
    const { value: valueState = "", isEditMode = false } = state;
    if (isEditMode || valueProps === valueState) return null;
    return { value: valueProps };
  }

  saveResults = () => {
    const { onEditItem, id = "", name: oldValue } = this.props;
    const { value = "" } = this.state;
    if (isEmpty(value) || oldValue === value) return;
    if (onEditItem) onEditItem(id, value);
  };

  handleClickOutside(): void {
    const { isEditMode = false } = this.state;
    if (isEditMode) this.setState({ isEditMode: false }, this.saveResults());
  }

  handleClick = (): void => {
    const { isEditMode = false } = this.state;
    if (!isEditMode) this.setState({ isEditMode: true });
  };

  handelChange = (e: any) => {
    const valueInput = e.target.value;
    const { value } = this.state;
    if (value !== valueInput) this.setState({ value: valueInput });
  };

  handleKeyDown = (e: any) => {
    e.stopPropagation();
    if (e.keyCode === 13) {
      e.preventDefault();
      this.handleClickOutside();
    }
  };

  render() {
    const { id = "", name: displayValue = "", onRemoveItem } = this.props;
    const { value: valueState, isEditMode = false } = this.state;
    return (
      <ActorContainer>
        {isEditMode ? (
          <InputContainer onKeyDown={this.handleKeyDown} onChange={this.handelChange} value={valueState} />
        ) : (
          <DisplayValueContainer onClick={this.handleClick}>{displayValue}</DisplayValueContainer>
        )}
        <RemoveIcon onClick={onRemoveItem.bind(this, id)} />
      </ActorContainer>
    );
  }
}

export default enhanceWithClickOutside(Actor);
