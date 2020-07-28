//@flow
import * as React from "react";
import { connect } from "react-redux";
import { changeDisplayedResultsCount } from "components/Navigation/actions";
import { mapStateToResultsCountProps } from "./selectors";
import enhanceWithClickOutside from "react-click-outside";

import { ResultCountContainer, InputContainer, ResultCountWrapperContainer } from "./styled";
import type { ComponentProps as Props, ComponentState as State } from "./types.js";

class ResultsCount extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value.toString(),
      isEditMode: false,
    };
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    const { value: valueProps = 0 } = props;
    const { value: valueState = "", isEditMode = false } = state;
    if (isEditMode || valueProps === valueState) return null;
    return { value: valueProps };
  }

  saveResults = (resultsCount: string) => {
    const { onChangeDisplayedResultsCount } = this.props;
    const valueInt = Number.parseInt(resultsCount);
    const correctValue = Number.isNaN(valueInt) ? 0 : valueInt;
    if (onChangeDisplayedResultsCount) onChangeDisplayedResultsCount(correctValue);
  };

  handleClickOutside(): void {
    const { isEditMode = false, value } = this.state;
    if (isEditMode) this.setState({ isEditMode: false }, this.saveResults(value));
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
    const { value = 0, isEditMode = false } = this.state;

    return (
      <ResultCountContainer onClick={this.handleClick}>
        <ResultCountWrapperContainer>
          {isEditMode ? (
            <InputContainer onChange={this.handelChange} onKeyDown={this.handleKeyDown} value={value} />
          ) : (
            value
          )}
        </ResultCountWrapperContainer>
      </ResultCountContainer>
    );
  }
}

const mapDispatchToProps = {
  onChangeDisplayedResultsCount: (resultsCount) => changeDisplayedResultsCount(resultsCount),
};

export default connect(mapStateToResultsCountProps, mapDispatchToProps)(enhanceWithClickOutside(ResultsCount));
