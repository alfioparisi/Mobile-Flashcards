import { IMPORT_INITIAL_STATE, CREATE_DECK, ADD_QUESTION } from '../actions/types';

const deck = (state = {}, action) => {
  switch(action.type) {
    case CREATE_DECK :
      return {
        title: action.name,
        questions: []
      };
    case ADD_QUESTION :
      return {
        ...state,
        questions: [
          ...state['questions'],
          {
            question: action.question,
            answer: action.answer
          }
        ]
      };
    default :
      return state;
  }
};

const decks = (state = {}, action) => {
  switch(action.type) {
    case IMPORT_INITIAL_STATE :
      return action.initialState.decks;
    case CREATE_DECK :
      return {
        ...state,
        [action.name]: deck(undefined, action)
      };
    case ADD_QUESTION :
      return {
        ...state,
        [action.deck]: deck(state[action.deck], action)
      };
    default :
      return state;
  }
};

export default decks;
