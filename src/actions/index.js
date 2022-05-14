//Search
export const fetchSearch = (request) => (dispatch) => {
    request("http://localhost:3001/search")
        .then(data => dispatch(searchFetched(data)))
        .catch((e) => dispatch(searchFetchingError(e)))
}
export const searchFetched = (search) => {
    return{
        type: "SEARCH_FETCHED",
        payload: search
    }
}
export const searchFetchingError = () => {
    return{
        type: "SEARCH_FETCHING_ERROR"
    }
}
//------------------------

//Suggestions
export const fetchSuggestions = (request) => (dispatch) => {
    dispatch(suggestionFetching());
    request("http://localhost:3001/suggestions")
        .then(data => dispatch(suggestionFetched(data)))
        .catch((e) => dispatch(suggestionFetchingError(e)));
}
export const suggestionFetching = () => {
    return{
        type: 'SUGGESTION_FETCHING'
    }
}
export const suggestionFetched = (suggest) => {
    return{
        type: 'SUGGESTION_FETCHED',
        payload: suggest
    }
}
export const suggestionFetchingError = () => {
    return{
        type: 'SUGGESTION_FETCHING_ERROR'
    }
}

//----------------

//Slider Users
export const fetchSlider = (request) => (dispatch) => {
    dispatch(sliderFetching());
    request("http://localhost:3001/sliderUsers")
        .then(data => dispatch(sliderFetched(data)))
        .catch((e) => dispatch(sliderFetchingError(e)))
}
export const sliderFetching = () => {
    return{
        type: 'SLIDER_FETCHING'
    }
}
export const sliderFetched = (slider) => {
    return{
        type: 'SLIDER_FETCHED',
        payload: slider
    }
}
export const sliderFetchingError = () => {
    return{
        type: 'SLIDER_FETCHING_ERROR'
    }
}
//-----------

//Post
export const fetchPost = (request) => (dispatch) => {
    dispatch(postFetching())
    request("http://localhost:3001/posts")
        .then(data => dispatch(postFetched(data)))
        .catch((e) => dispatch(postFetchingError(e)))
}
export const postFetching = () => {
    return{
        type: 'POST_FETCHING'
    }
}
export const postFetched = (post) => {
    return{
        type: 'POST_FETCHED',
        payload: post
    }
}
export const postFetchingError = () => {
    return{
        type: 'POST_FETCHING_ERROR'
    }
}
//--------
