const initialState = {
    sliderUsers: [],
    sliderLoadingStatus: "idle"
}
const sliderReducer = (state = initialState, action) => {
    switch (action.type){
        //Slider Users
        case "SLIDER_FETCHING":
            return{
                ...state,
                sliderLoadingStatus: 'loading'
            }
        case "SLIDER_FETCHED":
            return{
                ...state,
                sliderUsers: action.payload,
                sliderLoadingStatus: 'idle'
            }
        case "SLIDER_FETCHING_ERROR":
            return{
                ...state,
                sliderLoadingStatus: 'error'
            }
        default:
            return state
    }
}
export default  sliderReducer;