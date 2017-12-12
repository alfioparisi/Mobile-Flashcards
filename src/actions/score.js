import { INCREASE_SCORE, RESET_SCORE } from './types';

export const increaseScore = () => ({
  type: INCREASE_SCORE
});

export const resetScore = () => ({
  type: RESET_SCORE
});
