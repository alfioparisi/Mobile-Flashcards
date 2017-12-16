import { IMPORT_INITIAL_STATE, INCREASE_SCORE, RESET_SCORE } from '../actions/types';

const score = (state = 0, action) => {
  switch(action.type) {
    case IMPORT_INITIAL_STATE :
      return action.initialState.score;
    case INCREASE_SCORE :
      return state + 1;
    case RESET_SCORE :
      return 0;
    default :
      return state;
  }
};

export default score;
