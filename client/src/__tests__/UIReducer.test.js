import { uiReducer } from '../reducers/uiReducer';

const initialState = {
  loading: false,
  msgError: null,
};

describe('reducer', () => {
  it('should start with the value of false loading', () => {
    expect(uiReducer(initialState, initialState.loading)).toEqual({
      ...initialState,
      loading: false,
    });
  });
});
