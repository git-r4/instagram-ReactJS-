//Search
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


export const loadingFetching = () => {
    return{
        type: 'USERS_FETCHING'
    }
}
export const loadingFetched = (users) => {
    return{
        type: 'USERS_FETCHED',
        payload: users
    }
}
export const loadingFetchingError = () => {
    return{
        type: 'USERS_FETCHING_ERROR'
    }
}