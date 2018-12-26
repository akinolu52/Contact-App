import { combineReducers } from 'redux';
import contacts from './contactReducer';
import {reducer as toastrReducer} from 'react-redux-toastr';

export default combineReducers({
    contacts, 
    toastr: toastrReducer
});