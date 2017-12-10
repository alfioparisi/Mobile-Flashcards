import { CREATE_DECK } from '../actions/types';

const deck = (state = {}, action) => {
  switch(action.type) {
    case CREATE_DECK :
      return {
        title: action.name,
        questions: []
      };
    default :
      return state;
  }
};

const decks = (state = {}, action) => {
  switch(action.type) {
    case CREATE_DECK :
      return {
        ...state,
        deck(undefined, action)
      };
    default :
      return state;
  }
};

export default decks;
