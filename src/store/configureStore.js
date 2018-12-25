import { createStore } from 'redux'
import rootReducer from "../reducers";

export default function configureStore(intialState) {
    return createStore(rootReducer, intialState);
}