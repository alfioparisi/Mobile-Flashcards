import { createStore, combineReducers } from 'redux';
import decks from './reducers/decks';
import score from './reducers/score';

const reducer = combineReducers({
  decks,
  score
});

const store = createStore(reducer);

export default store;
