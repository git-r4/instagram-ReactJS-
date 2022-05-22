import {createStore, compose, combineReducers, applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk';

import searchReducer from "../reducers/search";
import sliderReducer from "../reducers/sliderUsers";
import postReducer from "../reducers/posts";
import suggestionReducer from "../reducers/suggestions";
import {configureStore} from "@reduxjs/toolkit";

const stringMiddleware = () => (next) => (action) => {
    if(typeof action === 'string'){
        return next({
            type: action
        })
    }
    return next(action)
}

//Very old version
/*const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())*/

//Redux Version
/*const store = createStore(
    combineReducers({searchReducer, sliderReducer, postReducer, suggestionReducer}),
    compose(
        applyMiddleware(ReduxThunk, stringMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)*/

//Redux ToolKit Version
const store = configureStore({
    reducer: {searchReducer, sliderReducer, postReducer, suggestionReducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;