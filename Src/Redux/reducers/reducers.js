const initialState = {
    info: {},
    loading: false,
    error: null,
  };

  /**
 * Reducer function for managing the state of the application.
 *
 * @param {Object} state - The current state of the application.
 * @param {Object} action - The action object containing the type and payload.
 * @return {Object} The updated state of the application.
 */
export const reducers = (state = initialState,action) => {
switch (action.type) {
    case 'FETCH_INFO_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_SUCCEEDED':
        return {
          ...state,
          loading: true,
          info: action.data,
        };
      case 'FETCH_INFO_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
}
}