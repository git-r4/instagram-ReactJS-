import {createStore, compose, combineReducers, applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk';

import searchReducer from "../reducers/search";
import sliderReducer from "../reducers/sliderUsers";
import postReducer from "../reducers/posts";
import suggestionReducer from "../reducers/suggestions";

const stringMiddleware = () => (next) => (action) => {
    if(typeof action === 'string'){
        return next({
            type: action
        })
    }
    return next(action)
}

const store = createStore(
    combineReducers({searchReducer, sliderReducer, postReducer, suggestionReducer}),
    compose(
        applyMiddleware(ReduxThunk, stringMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

/*const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())*/


export default store;