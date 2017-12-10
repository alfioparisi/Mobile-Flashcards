import { CREATE_DECK } from './types';

export const createDeck = name => ({
  type: CREATE_DECK,
  name
});
