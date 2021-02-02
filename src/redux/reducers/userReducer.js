import {
  SET_LOADING,
  GET_USER,
  SET_CURRENT_USER_REQUESTED,
  SET_CURRENT_USER,
} from "../actions/appAction";

const initialState = {
  loading: true,
  users: {},
  currentUser: "HillaryClinton",
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };

    case GET_USER:
      return { ...state, users: { ...payload }, loading: false };
    case SET_CURRENT_USER:
      return {
        ...state,
        loading: false,
        currentUser: state.currentUser.includes("Clinton")
          ? "BarackObama"
          : "HillaryClinton",
      };
    default:
      return state;
  }
};
export default userReducer;
