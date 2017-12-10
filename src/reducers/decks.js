import { CREATE_DECK, ADD_QUESTION } from '../actions/types';

const initialState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};

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

const decks = (state = initialState, action) => {
  switch(action.type) {
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
