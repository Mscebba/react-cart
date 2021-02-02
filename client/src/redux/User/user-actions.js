import * as actionTypes from './user-types';

export function setCurrentUser(user) {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: user,
  };
}
