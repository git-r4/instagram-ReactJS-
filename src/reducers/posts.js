const initialState = {
    posts: [],
    postLoadingStatus: "idle"
}
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        //Post
        case "POST_FETCHING":
            return {
                ...state,
                postLoadingStatus: 'loading'
            }
        case "POST_FETCHED":
            return {
                ...state,
                posts: action.payload,
                postLoadingStatus: 'idle'
            }
        case "POST_FETCHING_ERROR":
            return {
                ...state,
                postLoadingStatus: 'error'
            }
        default:
            return state;
    }
}
export default  postReducer;