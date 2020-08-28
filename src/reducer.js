//empty data layer
export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //REMOVE AFTER FINISHING CODING make it null AGAİN
  // token:
  //   "BQDUCiWMYVloqmRUd3ybEqwvJLl65iwDt_zr2hSAkmyFSMTXvCjw4B5814OT9oqJQXIRrHRVn9vDtdRVdS8-zllBra1xSBr41bBskQNqtZGZ5V3uQDiWoW9b6AdXcKmRi3xiffsuPm6RXTIcC1pa3Qk-lx06PwpfDeaz3F_fFBt96UZRHQaO",
};

//action is how we manipulate what the data layer looks like
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER": //when you receive an action called set_user return
      return {
        //this is what the new state will look like
        ...state, //keep whatever was in the current state,put this or it will overwrite on your state
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
