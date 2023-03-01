export const user = (state = null, action) => {
  switch(action.type) {
    case "SAVE_USER_DATA":
        return action.payload
    default: return state;
  }
}