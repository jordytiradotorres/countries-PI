import { types } from '../types/types';

export const serError = (err) => {
  return {
    type: types.uiSetError,
    payload: err,
  };
};

export const removeError = () => {
  return {
    type: types.uiRemoveError,
  };
};

export const startLoading = () => {
  return {
    type: types.uiStartLoading,
  };
};

export const finishLoading = () => {
  return {
    type: types.uiFinishLoading,
  };
};
