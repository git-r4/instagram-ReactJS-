const initialState = {
    suggestions: [],
    suggestionLoadingStatus: "idle"
}
const suggestionReducer = (state = initialState, action) => {
    switch (action.type){
        //Suggestion
        case "SUGGESTION_FETCHING":
            return{
                ...state,
                suggestionLoadingStatus: 'loading'
            }
        case "SUGGESTION_FETCHED":
            return{
                ...state,
                suggestions: action.payload,
                suggestionLoadingStatus: 'idle'
            }
        case "SUGGESTION_FETCHING_ERROR":
            return{
                ...state,
                suggestionLoadingStatus: 'error'
            }
        default:
            return state
    }
}
export default  suggestionReducer;