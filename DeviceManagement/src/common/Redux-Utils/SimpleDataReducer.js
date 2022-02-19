const initialState = {
    isFetching: false,
    finished: false
  };
  
  export function reducer(state = initialState, action, actionSignal) {
    switch (action.type) {
      case actionSignal.REQUEST:
        return {
          ...state,
          isFetching: true,
          finished: false,
          error: null
        };
      case actionSignal.SUCCESS:
        return {
          ...state,
          isFetching: false,
          finished: true,
          data: {
            ...action.data
          },
          error: null
        };
  
      case actionSignal.PROGRESS:
        return {
          ...state,
          data: {
            ...action.data
          }
        };
      case actionSignal.FAILURE:
        return {
          ...state,
          isFetching: false,
          finished: true,
          data: null,
          error: {
            ...state.error,
            ...action.data
          }
        };
      case actionSignal.CANCEL:
        return {
          isFetching: false,
          ...state
        };
      case actionSignal.CLEAR:
        return initialState;
      default:
        return state;
    }
  }
  
  export const createReducer = actionSignal => (state, action) => reducer(state, action, actionSignal);
  
  export default { initialState, createReducer, reducer };
  