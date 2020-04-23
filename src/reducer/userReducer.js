
export const initialState = null;
export const reducer = (state, action) => {
    if (action.Type == "USER") {
        return action.payload
    }
    return state

}