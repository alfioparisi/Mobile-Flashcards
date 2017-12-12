import { INCREASE_SCORE } from '../actions/types';

const score = (state = 0, action) => {
  switch(action.type) {
    case INCREASE_SCORE :
      return state + 1;
    default :
      return state;
  }
};

export default score;
