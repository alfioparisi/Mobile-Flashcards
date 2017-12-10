import { createStore, combineReducers } from 'redux';
import decks from './reducers/decks';

const reducer = combineReducers({
  decks
});

const store = createStore(reducer);

export default store;
