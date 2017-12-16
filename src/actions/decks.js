import { IMPORT_INITIAL_STATE, CREATE_DECK, ADD_QUESTION } from './types';

export const importInitialState = initialState => ({
  type: IMPORT_INITIAL_STATE,
  initialState
});

export const createDeck = name => ({
  type: CREATE_DECK,
  name
});

export const addQuestion = (deck, question, answer) => ({
  type: ADD_QUESTION,
  deck,
  question,
  answer
});
