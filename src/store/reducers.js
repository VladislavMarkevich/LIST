import { combineReducers } from "redux";
import navigation from "components/Navigation/reducers";
import actors from "components/Actors/reducers";

const combine = combineReducers({
  actors,
  navigation,
});

export default combine;
