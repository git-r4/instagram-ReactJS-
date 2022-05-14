const initialState = {
    search: [],
    searchLoadingStatus: "idle"
}
const searchReducer = (state = initialState, action) => {
    switch (action.type){
        //Search
        case "SEARCH_FETCHED":
            return{
                ...state,
                search: action.payload,
                searchLoadingStatus: 'idle'
            }
        case "SEARCH_FETCHING_ERROR":
            return{
                ...state,
                search: action.payload,
                searchLoadingStatus: 'error'
            }
        default:
            return state
    }
}
export default  searchReducer;