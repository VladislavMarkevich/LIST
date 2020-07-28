//@flow
import * as React from "react";
import { connect } from "react-redux";
import { mapStateToLoadMoreProps } from "./selectors";
import { startSearchProcess } from "./actions";

import type { ComponentProps as Props, ComponentState as State } from "./types";

import { LoadMoreButtonContainer, DisplayValueContainer, Spinner } from "./styled";

const defaultApiPath = "https://swapi.co/api/people/";

class LoadMore extends React.Component<Props, State> {
  componentDidMount() {
    const { onStartSearchProcess } = this.props;
    if (onStartSearchProcess) onStartSearchProcess(defaultApiPath);
  }

  handleClick = () => {
    const { onStartSearchProcess, nextPage } = this.props;
    if (onStartSearchProcess) onStartSearchProcess(nextPage);
  };

  render() {
    const { isVisible = false, isBusy = false } = this.props;
    return (
      <LoadMoreButtonContainer>
        {isBusy ? (
          <Spinner />
        ) : isVisible ? (
          <DisplayValueContainer onClick={this.handleClick}>Load more</DisplayValueContainer>
        ) : null}
      </LoadMoreButtonContainer>
    );
  }
}

const mapDispatchToProps = {
  onStartSearchProcess: (apiPath) => startSearchProcess(apiPath),
};

export default connect(mapStateToLoadMoreProps, mapDispatchToProps)(LoadMore);
