const initialState = {
    sliderUsers: [],
    posts: [],
    suggestions: [],
    search: [],
    loadingStatus: "idle"
}
const reducer = (state = initialState, action) => {
    switch (action.type){
        //Search
        case "SEARCH_FETCHED":
            return{
                ...state,
                search: action.payload,
                loadingStatus: 'idle'
            }
        case "SEARCH_FETCHING_ERROR":
            return{
                ...state,
                search: action.payload,
                loadingStatus: 'error'
            }

        //Suggestion
        case "SUGGESTION_FETCHING":
            return{
                ...state,
                loadingStatus: 'loading'
            }
        case "SUGGESTION_FETCHED":
            return{
                ...state,
                suggestions: action.payload,
                loadingStatus: 'idle'
            }
        case "SUGGESTION_FETCHING_ERROR":
            return{
                ...state,
                loadingStatus: 'error'
            }



        case "USERS_FETCHING":
            return{
                ...state,
                loadingStatus: 'loading'
            }
        case "USERS_FETCHED":
            return{
                ...state,
                loadingStatus: 'idle',
                sliderUsers: action.payload,
                posts: action.payload,
            }
        case "USERS_FETCHING_ERROR":
            return{
                ...state,
                loadingStatus: 'error'
            }
        default: return state
    }
}
export default  reducer;