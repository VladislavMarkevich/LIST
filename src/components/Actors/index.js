//@flow
import * as React from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import { mapStateToActorsProps } from "./selectors";
import { removeItem, editItem } from "./actions";

import Actor from "./Actor";

import { ActorsContainer, Spinner } from "./styled";
import type { ComponentProps as Props, ComponentState as State } from "./types.js";

class Actors extends React.Component<Props, State> {
  handleRemoveItem = (actorId: string) => {
    const { onRemoveItem } = this.props;
    if (onRemoveItem) onRemoveItem(actorId);
  };

  handleEditItem = (id: string, name: string) => {
    const { onEditItem } = this.props;
    if (onEditItem) onEditItem(id, name);
  };

  render() {
    const { searchResultIds = [], searchResultsByIds = {} } = this.props;
    const needDisplaySpinner = isEmpty(searchResultIds);

    return (
      <ActorsContainer>
        {needDisplaySpinner ? (
          <Spinner />
        ) : (
          searchResultIds.map((id) => {
            const searchResult = searchResultsByIds[id];
            return (
              <Actor
                key={searchResult.id}
                onEditItem={this.handleEditItem}
                onRemoveItem={this.handleRemoveItem}
                {...searchResult}
              />
            );
          })
        )}
      </ActorsContainer>
    );
  }
}

const mapDispatchToProps = {
  onRemoveItem: (actorId: string) => removeItem(actorId),
  onEditItem: (id: string, name: string) => editItem(id, name),
};

export default connect(mapStateToActorsProps, mapDispatchToProps)(Actors);
