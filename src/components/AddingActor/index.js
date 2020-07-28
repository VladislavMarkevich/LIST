//@flow
import * as React from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import { addItem } from "components/Actors/actions";
import type { ComponentProps as Props, ComponentState as State } from "./types.js";

import { AddingActorContainer, InputContainer } from "./styled";

class AddingActor extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  handleChange = (e: any) => {
    const { value } = this.state;
    const newValue: string = e.target.value;
    if (value !== newValue) this.setState({ value: newValue });
  };

  handleAddActor = (name: string) => {
    const { onAddItem } = this.props;
    if (onAddItem) onAddItem(name);
  };

  handleKeyDown = (e) => {
    e.stopPropagation();
    if (e.keyCode === 13) {
      e.preventDefault();
      const { value = "" } = this.state;
      if (isEmpty(value)) return;
      this.setState({ value: "" }, this.handleAddActor(value));
    }
  };

  render() {
    const { value } = this.state;
    return (
      <AddingActorContainer>
        <InputContainer onChange={this.handleChange} onKeyDown={this.handleKeyDown} value={value} />
      </AddingActorContainer>
    );
  }
}

const mapDispatchToProps = {
  onAddItem: (name: string) => addItem(name),
};

export default connect(undefined, mapDispatchToProps)(AddingActor);
